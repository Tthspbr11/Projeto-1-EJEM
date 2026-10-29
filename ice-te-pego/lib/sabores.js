export const TAMANHOS = [];

export const sabores = [
  {
    id: 1,
    sabor: "Casquinha Simples",
    descricao: "1 bola de sorvete à escolha (baunilha, chocolate ou morango).",
    preco: 4.00,
    imagem: "/produtos/01-sorvete-casquinha.jpeg",
    opcoes: ["Baunilha", "Chocolate", "Morango"],
  },
  {
    id: 2,
    sabor: "Picolé de Chocolate",
    descricao: "Picolé cremoso de chocolate.",
    preco: 5.00,
    imagem: "/produtos/02-picole-chocolate.jpeg",
  },
  {
    id: 3,
    sabor: "Picolé de Frutas",
    descricao: "Morango, limão ou maracujá.",
    preco: 6.00,
    imagem: "/produtos/03-picole-frutas.jpeg",
    opcoes: ["Morango", "Limão", "Maracujá"],
  },
  {
    id: 4,
    sabor: "Casquinha Dupla",
    descricao: "2 bolas de sorvete à escolha (baunilha, chocolate ou morango).",
    preco: 8.00,
    imagem: "/produtos/04-casquinha-dupla.jpeg",
    opcoes: ["Baunilha", "Chocolate", "Morango"],
  },
  {
    id: 5,
    sabor: "Açaí Pequeno",
    descricao: "300 ml de açaí tradicional.",
    preco: 10.00,
    imagem: "/produtos/05-acai-pequeno.jpeg",
  },
  {
    id: 6,
    sabor: "Milk-shake Tradicional",
    descricao: "300 ml nos sabores chocolate, morango ou baunilha.",
    preco: 12.00,
    imagem: "/produtos/06-milkshake-tradicional.jpeg",
    opcoes: ["Chocolate", "Morango", "Baunilha"],
  },
  {
    id: 7,
    sabor: "Sundae de Chocolate",
    descricao: "Sorvete, calda e cobertura.",
    preco: 13.00,
    imagem: "/produtos/07-sundae-chocolate.jpeg",
  },
  {
    id: 8,
    sabor: "Açaí Médio",
    descricao: "500 ml com até 2 acompanhamentos.",
    preco: 15.00,
    imagem: "/produtos/08-acai-medio.jpeg",
  },
  {
    id: 9,
    sabor: "Brownie com Sorvete",
    descricao: "Brownie de chocolate com 1 bola de sorvete.",
    preco: 16.00,
    imagem: "/produtos/09-brownie-sorvete.jpeg",
  },
  {
    id: 10,
    sabor: "Waffle Gelado",
    descricao: "Waffle com sorvete e calda.",
    preco: 18.00,
    imagem: "/produtos/10-waffle-gelado.jpeg",
  },
  {
    id: 11,
    sabor: "Milk-shake Especial",
    descricao: "500 ml com chantilly e cobertura.",
    preco: 20.00,
    imagem: "/produtos/11-milkshake-especial.jpeg",
  },
  {
    id: 12,
    sabor: "Banana Split",
    descricao: "3 bolas de sorvete, banana, caldas e chantilly.",
    preco: 23.00,
    imagem: "/produtos/12-banana-split.jpeg",
  },
  {
    id: 13,
    sabor: "Taça Premium",
    descricao: "3 bolas de sorvete, caldas e acompanhamentos especiais.",
    preco: 27.00,
    imagem: "/produtos/13-taca-premium.jpeg",
  },
  {
    id: 14,
    sabor: "Pote Família",
    descricao: "2 litros de sorvete com sabores à escolha.",
    preco: 35.00,
    imagem: "/produtos/14-pote-familia.jpeg",
    opcoes: ["Baunilha", "Chocolate", "Morango", "Misto"],
  },
  {
    id: 15,
    sabor: "Combo Ice Te Pego",
    descricao: "1 milk-shake, 1 brownie e 2 casquinhas.",
    preco: 49.90,
    imagem: "/produtos/15-combo-ice-te-pego.jpeg",
  },
];

export const formasPagamento = ["Pix", "Cartão na retirada", "Dinheiro na retirada"];

export const brl = (valor) =>
  valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });