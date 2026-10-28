import Link from "next/link";

export default function Home() {
    return (
    <>
    <section className="hero">
      <h1>Sorvete artesanal, pronto para você retirar!</h1>
      <p>Escolha seus produtos, monte o carrinho e retire seu pedido no balcão.</p>
      <Link href="/cardapio" className="cta">Ver cardápio</Link>
    </section>

  <footer>
    <h2>Onde estamos</h2>
    <p>Endereço: Av. Paulista, 900</p>
  </footer>
</>

);
}