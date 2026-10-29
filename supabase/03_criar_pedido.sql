-- Execute após 01_estrutura.sql e 02_produtos.sql.
-- Registra pedido e itens na mesma transação.
-- O total é calculado com os preços do banco.

begin;

create or replace function public.criar_pedido(
  p_cliente_nome text,
  p_cliente_endereco text,
  p_pagamento text,
  p_itens jsonb
)
returns bigint
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_pedido_id bigint;
  v_item jsonb;
  v_produto_id bigint;
  v_quantidade integer;
  v_preco numeric(10, 2);
  v_total numeric(10, 2) := 0;
begin
  if coalesce(length(trim(p_cliente_nome)), 0)
      not between 1 and 120 then
    raise exception 'Informe um nome de até 120 caracteres.';
  end if;

  if coalesce(length(trim(p_cliente_endereco)), 0)
      not between 1 and 500 then
    raise exception 'Informe um endereço de até 500 caracteres.';
  end if;

  if p_pagamento is null
      or p_pagamento not in ('pix', 'dinheiro', 'cartao') then
    raise exception 'Forma de pagamento inválida.';
  end if;

  if p_itens is null
      or jsonb_typeof(p_itens) <> 'array' then
    raise exception 'Envie uma lista de itens.';
  end if;

  if jsonb_array_length(p_itens) not between 1 and 50 then
    raise exception 'O pedido deve ter entre 1 e 50 itens.';
  end if;

  insert into public.pedidos (
    cliente_nome, cliente_endereco, pagamento, total
  )
  values (
    trim(p_cliente_nome),
    trim(p_cliente_endereco),
    p_pagamento,
    0
  )
  returning id into v_pedido_id;

  for v_item in
    select value from jsonb_array_elements(p_itens)
  loop
    if coalesce(v_item->>'produto_id', '') !~ '^[1-9][0-9]*$'
        or coalesce(v_item->>'quantidade', '') !~ '^[1-9][0-9]*$' then
      raise exception 'Produto ou quantidade inválidos.';
    end if;

    v_produto_id := (v_item->>'produto_id')::bigint;
    v_quantidade := (v_item->>'quantidade')::integer;

    if v_quantidade > 99 then
      raise exception 'O limite é de 99 unidades por item.';
    end if;

    if length(coalesce(v_item->>'observacao', '')) > 500 then
      raise exception 'A observação deve ter até 500 caracteres.';
    end if;

    select preco into v_preco
    from public.produtos
    where id = v_produto_id and ativo = true;

    if not found then
      raise exception 'Produto inexistente ou indisponível.';
    end if;

    insert into public.itens_pedido (
      pedido_id, produto_id, quantidade,
      preco_unitario, observacao
    )
    values (
      v_pedido_id, v_produto_id, v_quantidade,
      v_preco, coalesce(v_item->>'observacao', '')
    );

    v_total := v_total + v_preco * v_quantidade;
  end loop;

  update public.pedidos
  set total = v_total
  where id = v_pedido_id;

  return v_pedido_id;
end;
$$;

revoke execute on function
  public.criar_pedido(text, text, text, jsonb)
  from public, anon, authenticated;

grant execute on function
  public.criar_pedido(text, text, text, jsonb)
  to anon, authenticated;

commit;
