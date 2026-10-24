"use client"; // precisa de interação (escolher tamanho e adicionar)
import { useState } from "react";
import { useCart } from "./CartProvider";
import { TAMANHOS, brl } from "@/lib/sabores";

export default function ProdutoCard({ produto }) {
  const { add } = useCart();
  const [tamanho, setTamanho] = useState("Médio");
  const [aviso, setAviso] = useState("");

  function adicionar() {
    if (!TAMANHOS.includes(tamanho)) {
      setAviso("Escolha um tamanho.");
      return;
    }
    add({
      id: `${produto.id}-${tamanho}`,
      sabor: produto.sabor,
      tamanho,
      preco: produto.precos[tamanho],
    });
    setAviso(`${produto.sabor} (${tamanho}) no carrinho`);
  }

  return (
    <article className="card">
      {/* Troque por <Image> do next/image quando tiver as fotos em /public/sabores */}
      <div className="bola" style={{ background: produto.cor }} aria-hidden="true" />
      <h3>{produto.sabor}</h3>
      <p>{produto.descricao}</p>
      <label>
        Tamanho
        <select value={tamanho} onChange={(e) => setTamanho(e.target.value)}>
          {TAMANHOS.map((t) => (
            <option key={t} value={t}>{t} · {brl(produto.precos[t])}</option>
          ))}
        </select>
      </label>
      <button onClick={adicionar}>Adicionar ao carrinho</button>
      <small role="status">{aviso}</small>
    </article>
  );
}
