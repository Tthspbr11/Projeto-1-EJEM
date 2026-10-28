import Link from "next/link";

export default function Home() {
    return (
    <>
    <section className="hero">
      <h1>Sorvete artesanal, direto na sua porta.</h1>
      <p>Escolha o sabor, monte o carrinho e faça o pedido em poucos toques.</p>
      <Link href="/cardapio" className="cta">Ver cardápio</Link>
    </section>

  <footer>
    <h2>Onde estamos</h2>
    <p>Endereço: Av. Paulista, 900</p>
  </footer>
</>

);
}