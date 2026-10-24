# Ice Te Pego – e-commerce de sorvetes (base)

Next.js (App Router) + React, publicado na Vercel.

## Rodar localmente
```bash
npm install
npm run dev   # http://localhost:3000
```

## Publicar na Vercel
1. Suba a pasta para um repositório no GitHub.
2. Em vercel.com > Add New Project, importe o repositório (deploy automático a cada push).
3. Em Settings > Environment Variables, cadastre as chaves do `.env.example`.

## Estrutura
- `app/layout.js` – layout global + `metadata` (SEO)
- `app/cardapio/page.js` – Server Component com o catálogo
- `components/ProdutoCard.js` – Client Component ("Adicionar ao carrinho")
- `components/CartProvider.js` – estado do carrinho (array de objetos) e total em tempo real
- `app/checkout/page.js` – finalização com validações (if/else e try/catch)
- `app/api/pedidos/route.js` – API GET/POST de pedidos
