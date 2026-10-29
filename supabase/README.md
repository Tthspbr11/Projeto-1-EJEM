# Banco de Dados — Ice Te Pego

Banco PostgreSQL hospedado no Supabase para armazenar produtos e pedidos.

## Arquivos

Execute no SQL Editor de um projeto Supabase novo, nesta ordem:

1. `01_estrutura.sql` — cria tabelas e regras de acesso.
2. `02_produtos.sql` — cadastra os 15 produtos.
3. `03_criar_pedido.sql` — cria a função de registro de pedidos.

O banco atual já está configurado. Não execute novamente os scripts de estrutura e produtos nele.

## Tabelas

- `produtos`: catálogo e preços.
- `pedidos`: dados da compra.
- `itens_pedido`: produtos e quantidades de cada pedido.

## Conexão com o aplicativo

Configure na raiz do projeto Expo um arquivo `.env`:

```env
EXPO_PUBLIC_SUPABASE_URL=sua_url
EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sua_chave_publica
```

O aplicativo deve usar `@supabase/supabase-js` para consultar `produtos` e chamar a função `criar_pedido`.

A função recebe:

- `p_cliente_nome`
- `p_cliente_endereco`
- `p_pagamento`: `pix`, `dinheiro` ou `cartao`
- `p_itens`: lista com `produto_id`, `quantidade` e `observacao` opcional.

O total é calculado no banco, e a função retorna o identificador do pedido.

## Acesso

Visitantes podem consultar produtos ativos e registrar pedidos pela função. A leitura pública dos pedidos e seus itens é bloqueada por RLS.

Nunca coloque a senha do banco ou chaves `secret` e `service_role` no aplicativo ou no repositório.
