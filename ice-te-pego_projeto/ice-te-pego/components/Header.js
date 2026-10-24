"use client";
import Link from "next/link";
import { useCart } from "./CartProvider";

export default function Header() {
  const { quantidade } = useCart();
  return (
    <header className="header">
      <Link href="/" className="logo">Ice Te Pego</Link>
      <nav>
        <Link href="/cardapio">Cardápio</Link>
        <Link href="/checkout" className="carrinho">
          Carrinho <span aria-label={`${quantidade} itens`}>{quantidade}</span>
        </Link>
      </nav>
    </header>
  );
}
