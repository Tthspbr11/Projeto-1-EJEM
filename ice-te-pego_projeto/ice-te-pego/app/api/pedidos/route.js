import { NextResponse } from "next/server";
import { formasPagamento } from "@/lib/sabores";

// GET /api/pedidos -> lista pedidos (futuro: painel da equipe, protegido)
export async function GET() {
  // TODO: buscar no banco
  return NextResponse.json({ pedidos: [] });
}

// POST /api/pedidos -> grava a encomenda
export async function POST(request) {
  try {
    const pedido = await request.json();

    if (!Array.isArray(pedido.itens) || pedido.itens.length === 0)
      return NextResponse.json({ erro: "Pedido sem itens." }, { status: 400 });
    if (!pedido.cliente?.nome || !pedido.cliente?.endereco)
      return NextResponse.json({ erro: "Dados do cliente incompletos." }, { status: 400 });
    if (!formasPagamento.includes(pedido.pagamento))
      return NextResponse.json({ erro: "Forma de pagamento inválida." }, { status: 400 });

    // TODO: recalcular o total NO SERVIDOR com os preços do catálogo (não confie no cliente)
    // TODO: salvar no banco usando process.env.DATABASE_URL
    const numero = `#${Date.now().toString().slice(-6)}`;
    console.log("Novo pedido", numero, pedido);

    return NextResponse.json({ numero }, { status: 201 });
  } catch {
    return NextResponse.json({ erro: "Requisição inválida." }, { status: 400 });
  }
}
