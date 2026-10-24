// Catálogo de exemplo. Depois, troque por consulta ao banco de dados.
export const TAMANHOS = ["Pequeno", "Médio", "Grande"];

export const sabores = [
  { id: 1, sabor: "Morango", descricao: "Morangos frescos e creme de leite.", cor: "#F2557E", precos: { Pequeno: 9.5, Médio: 12.5, Grande: 15.5 } },
  { id: 2, sabor: "Pistache", descricao: "Pistache torrado, sem corante.", cor: "#9CCB8A", precos: { Pequeno: 12, Médio: 15, Grande: 19 } },
  { id: 3, sabor: "Chocolate belga", descricao: "Cacau 70% e um toque de sal.", cor: "#6B3F2E", precos: { Pequeno: 10, Médio: 13, Grande: 16.5 } },
  { id: 4, sabor: "Maracujá", descricao: "Azedinho, feito com a polpa da fruta.", cor: "#F4B73F", precos: { Pequeno: 9, Médio: 12, Grande: 15 } },
];

export const formasPagamento = ["Pix", "Cartão na entrega", "Dinheiro"];

export const brl = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
