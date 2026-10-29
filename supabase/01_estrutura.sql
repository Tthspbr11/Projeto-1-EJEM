-- Execute somente em um banco novo.
-- Em seguida, execute 02_produtos.sql e 03_criar_pedido.sql.

begin;

create table public.produtos (
  id bigint generated always as identity primary key,
  nome text not null,
  descricao text not null default '',
  preco numeric(10, 2) not null check (preco >= 0),
  imagem_url text,
  ativo boolean not null default true
);

create table public.pedidos (
  id bigint generated always as identity primary key,
  cliente_nome text not null
    check (length(trim(cliente_nome)) > 0),
  cliente_endereco text not null
    check (length(trim(cliente_endereco)) > 0),
  pagamento text not null
    check (length(trim(pagamento)) > 0),
  total numeric(10, 2) not null check (total >= 0),
  status text not null default 'novo'
    check (status in (
      'novo', 'em_preparo', 'saiu_para_entrega',
      'concluido', 'cancelado'
    )),
  criado_em timestamptz not null default now()
);

create table public.itens_pedido (
  id bigint generated always as identity primary key,
  pedido_id bigint not null
    references public.pedidos(id) on delete cascade,
  produto_id bigint not null
    references public.produtos(id),
  quantidade integer not null check (quantidade > 0),
  preco_unitario numeric(10, 2) not null
    check (preco_unitario >= 0),
  observacao text not null default ''
);

create index itens_pedido_pedido_idx
  on public.itens_pedido(pedido_id);

create index itens_pedido_produto_idx
  on public.itens_pedido(produto_id);

alter table public.produtos enable row level security;
alter table public.pedidos enable row level security;
alter table public.itens_pedido enable row level security;

grant select on public.produtos to anon, authenticated;

create policy "Consultar produtos ativos"
  on public.produtos
  for select
  to anon, authenticated
  using (ativo = true);

commit;
