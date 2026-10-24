"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { brl, formasPagamento } from "@/lib/sabores";

export default function Checkout() {
  const { items, total, setQtd, remove, clear } = useCart();
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [pedido, setPedido] = useState(null);

  async function finalizar(e) {
    e.preventDefault();
    setErro("");

    // Controle de erros (domínio): impede ações inválidas
    if (items.length === 0) return setErro("Seu carrinho está vazio. Escolha ao menos um sabor.");
    if (!nome.trim() || !endereco.trim()) return setErro("Preencha nome e endereço de entrega.");
    if (!pagamento) return setErro("Selecione uma forma de pagamento.");

    setEnviando(true);
    try {
      const res = await fetch("/api/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cliente: { nome, endereco }, pagamento, itens: items, total }),
      });
      const dados = await res.json();
      if (!res.ok) throw new Error(dados.erro || "Não foi possível enviar o pedido.");
      setPedido(dados.numero);
      clear();
    } catch (err) {
      setErro(err.message || "Falha de conexão. Tente novamente.");
    } finally {
      setEnviando(false);
    }
  }

  if (pedido) {
    return (
      <section className="hero">
        <h1>Pedido {pedido} recebido!</h1>
        <p>Já estamos preparando seus gelados.</p>
        <Link href="/cardapio" className="cta">Pedir mais</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>Seu pedido</h1>
      {items.length === 0 ? (
        <p>Carrinho vazio. <Link href="/cardapio">Ver cardápio</Link></p>
      ) : (
        <ul className="lista">
          {items.map((i) => (
            <li key={i.id}>
              <span>{i.sabor} ({i.tamanho})</span>
              <span className="qtd">
                <button type="button" onClick={() => setQtd(i.id, i.qtd - 1)} aria-label="Diminuir">−</button>
                {i.qtd}
                <button type="button" onClick={() => setQtd(i.id, i.qtd + 1)} aria-label="Aumentar">+</button>
              </span>
              <strong>{brl(i.preco * i.qtd)}</strong>
              <button type="button" onClick={() => remove(i.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
      <p className="total">Total: <strong>{brl(total)}</strong></p>

      <form onSubmit={finalizar} className="form">
        <label>Nome<input value={nome} onChange={(e) => setNome(e.target.value)} /></label>
        <label>Endereço de entrega<input value={endereco} onChange={(e) => setEndereco(e.target.value)} /></label>
        <label>Pagamento
          <select value={pagamento} onChange={(e) => setPagamento(e.target.value)}>
            <option value="">Selecione</option>
            {formasPagamento.map((f) => <option key={f}>{f}</option>)}
          </select>
        </label>
        {erro && <p className="erro" role="alert">{erro}</p>}
        <button disabled={enviando}>{enviando ? "Enviando..." : "Finalizar pedido"}</button>
      </form>
    </section>
  );
}
