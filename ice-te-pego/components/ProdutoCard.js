"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "./CartProvider";
import { brl } from "@/lib/sabores";

export default function ProdutoCard({ produto }) {
  const { add } = useCart();
  const [opcao, setOpcao] = useState(produto.opcoes?.[0] || "");
  const [aviso, setAviso] = useState("");

  function adicionar() {
    const nomeProduto = opcao
      ? `${produto.sabor} - ${opcao}`
      : produto.sabor;

    add({
      id: opcao ? `${produto.id}-${opcao}` : String(produto.id),
      sabor: nomeProduto,
      preco: produto.preco,
    });

    setAviso(`${nomeProduto} adicionado ao carrinho!`);
  }

  return (
    <article className="card">
      <Image
        src={produto.imagem}
        alt={produto.sabor}
        width={300}
        height={220}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <h3>{produto.sabor}</h3>
      <p>{produto.descricao}</p>

      {produto.opcoes && (
        <label>
          Escolha o sabor:
          <select
            value={opcao}
            onChange={(e) => setOpcao(e.target.value)}
          >
            {produto.opcoes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      )}

      <p>
        <strong>{brl(produto.preco)}</strong>
      </p>

      <button type="button" onClick={adicionar}>
        Adicionar ao carrinho
      </button>

      <small role="status">{aviso}</small>
    </article>
  );
}