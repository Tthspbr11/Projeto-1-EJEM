"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "./CartProvider";
import { brl } from "@/lib/sabores";

export default function ProdutoCard({ produto }) {
  const { add } = useCart();
  const [opcao, setOpcao] = useState(produto.opcoes?.[0] || "");
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);
  const [aviso, setAviso] = useState("");

  function clicarAdicionar() {
    setAviso("");

    if (produto.opcoes?.length) {
      setOpcao(produto.opcoes[0]);
      setMostrarOpcoes(true);
      return;
    }

    adicionarAoCarrinho();
  }

  function adicionarAoCarrinho() {
    const nomeProduto = opcao
      ? `${produto.sabor} - ${opcao}`
      : produto.sabor;

    add({
      id: opcao ? `${produto.id}-${opcao}` : String(produto.id),
      sabor: nomeProduto,
      preco: produto.preco,
    });

    setMostrarOpcoes(false);
    setAviso("Produto adicionado ao carrinho!");
  }

  return (
    <>
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

        <p className="descricao-produto">{produto.descricao}</p>

        <p className="preco-produto">
          <strong>{brl(produto.preco)}</strong>
        </p>

        <button type="button" onClick={clicarAdicionar}>
          Adicionar ao carrinho
        </button>

        <small role="status">{aviso}</small>
      </article>

      {mostrarOpcoes && (
        <div
          className="modal-fundo"
          onClick={() => setMostrarOpcoes(false)}
        >
          <div
            className="modal-sabores"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`titulo-${produto.id}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id={`titulo-${produto.id}`}>
              Escolha o sabor
            </h2>

            <p>{produto.sabor}</p>

            <label htmlFor={`opcao-${produto.id}`}>
              Sabor:
            </label>

            <select
              id={`opcao-${produto.id}`}
              value={opcao}
              onChange={(e) => setOpcao(e.target.value)}
            >
              {produto.opcoes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <div className="botoes-modal">
              <button
                type="button"
                onClick={() => setMostrarOpcoes(false)}
              >
                Cancelar
              </button>

              <button
                type="button"
                onClick={adicionarAoCarrinho}
              >
                Confirmar e adicionar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}