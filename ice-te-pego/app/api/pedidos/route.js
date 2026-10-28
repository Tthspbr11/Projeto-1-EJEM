import { NextResponse } from "next/server";
import { formasPagamento } from "@/lib/sabores";

// GET /api/pedidos -> lista pedidos
export async function GET() {
  return NextResponse.json({ pedidos: [] });
}

// POST /api/pedidos -> registra o pedido
export async function POST(request) {
  try {
    const pedido = await request.json();

    if (!Array.isArray(pedido.itens) || pedido.itens.length === 0) {
      return NextResponse.json(
        { erro: "Pedido sem itens." },
        { status: 400 }
      );
    }

    if (!pedido.cliente?.nome?.trim()) {
      return NextResponse.json(
        { erro: "Informe seu nome." },
        { status: 400 }
      );
    }

    if (!formasPagamento.includes(pedido.pagamento)) {
      return NextResponse.json(
        { erro: "Forma de pagamento inválida." },
        { status: 400 }
      );
    }

    const numero = `#${Date.now().toString().slice(-6)}`;

    console.log("Novo pedido para retirada no balcão:", numero, pedido);

    return NextResponse.json(
      {
        numero,
        mensagem: "Pedido registrado para retirada no balcão."
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { erro: "Requisição inválida." },
      { status: 400 }
    );
  }
}