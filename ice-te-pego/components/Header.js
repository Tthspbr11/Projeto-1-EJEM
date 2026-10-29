"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "./CartProvider";

export default function Header() {
  const { quantidade } = useCart();

  return (
    <header className="header">
      <Link href="/" className="logo">
        <Image
          src="/logo.png"
          alt="Logo Ice Te Pego"
          width={45}
          height={45}
          priority
        />
        <span>Ice Te Pego</span>
      </Link>

      <nav>
        <Link href="/cardapio">Cardápio</Link>
        <Link href="/checkout" className="carrinho">
          Carrinho <span aria-label={`${quantidade} itens`}>{quantidade}</span>
        </Link>
      </nav>
    </header>
  );
}