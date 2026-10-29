import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero inicio-hero">
        <span className="selo">🍦 Seu momento mais doce começa aqui</span>

        <h1>Um mundo de sabores para deixar seu dia mais feliz!</h1>

        <p>
          Sorvetes cremosos, açaí, milkshakes e sobremesas especiais.
          Escolha seus favoritos online e retire seu pedido no balcão!
        </p>

        <Link href="/cardapio" className="cta">
          Conheça nosso cardápio →
        </Link>

        <div className="beneficios">
          <div>
            <span>🍨</span>
            <strong>Muitas opções</strong>
            <p>Sabores para todos os gostos.</p>
          </div>

          <div>
            <span>🛍️</span>
            <strong>Pedido online</strong>
            <p>Escolha seus produtos sem complicação.</p>
          </div>

          <div>
            <span>💚</span>
            <strong>Feito para você</strong>
            <p>Monte seu pedido do seu jeito.</p>
          </div>
        </div>
      </section>

      <section className="secao-inicio">
        <div className="texto-secao">
          <span className="subtitulo">UM CARDÁPIO IRRESISTÍVEL</span>
          <h2>Qual vai ser a sua felicidade de hoje?</h2>
          <p>
            Do clássico sorvete na casquinha ao milkshake cremoso,
            passando pelo açaí e pelas sobremesas especiais:
            aqui você encontra opções para transformar qualquer
            momento em uma pausa deliciosa.
          </p>

          <Link href="/cardapio" className="cta">
            Explorar sabores
          </Link>
        </div>

        <div className="destaques-grid">
          <article className="destaque-item">
            <span>🍦</span>
            <h3>Sorvetes</h3>
            <p>Clássicos irresistíveis para refrescar seu dia.</p>
          </article>

          <article className="destaque-item">
            <span>🥤</span>
            <h3>Milkshakes</h3>
            <p>Cremosos, geladinhos e cheios de sabor.</p>
          </article>

          <article className="destaque-item">
            <span>🍓</span>
            <h3>Açaí</h3>
            <p>Uma opção deliciosa para sua pausa.</p>
          </article>

          <article className="destaque-item">
            <span>🍫</span>
            <h3>Sobremesas</h3>
            <p>Combinações especiais para adoçar o momento.</p>
          </article>
        </div>
      </section>

      
      <section className="como-funciona">
        <div className="como-funciona-conteudo">
          <span className="subtitulo">É SIMPLES ASSIM</span>
          <h2>Seu pedido em três passos</h2>

          <div className="passos-grid">
            <article>
              <span>1</span>
              <h3>Escolha</h3>
              <p>Explore o cardápio e selecione seus produtos favoritos.</p>
            </article>

            <article>
              <span>2</span>
              <h3>Peça online</h3>
              <p>Adicione tudo ao carrinho e escolha como pagar.</p>
            </article>

            <article>
              <span>3</span>
              <h3>Retire no balcão</h3>
              <p>Faça seu pedido e retire na Ice Te Pego.</p>
            </article>
          </div>

          <Link href="/cardapio" className="cta">
            Fazer meu pedido →
          </Link>
        </div>
      </section>


      <section className="localizacao">
        <div className="localizacao-texto">
          <span className="subtitulo">VENHA NOS ENCONTRAR</span>
          <h2>Seu próximo momento delicioso começa aqui.</h2>

          <p>
            Faça seu pedido online e retire no balcão.
            Estamos esperando por você!
          </p>

          <div className="endereco-card">
            <span>📍</span>
            <div>
              <strong>Nosso endereço</strong>
              <p>Avenida Paulista, 900</p>
              <p>Bela Vista — São Paulo, SP</p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Avenida+Paulista%2C+900%2C+S%C3%A3o+Paulo%2C+SP"
            target="_blank"
            rel="noopener noreferrer"
            className="cta"
          >
            Ver rota no Google Maps ↗
          </a>

          <p className="aviso-endereco">
            Confirme o endereço antes de visitar: ele deve corresponder
            ao local real de retirada da loja.
          </p>
        </div>

        <div className="mapa-container">
          <iframe
            title="Mapa da Avenida Paulista, 900, São Paulo"
            src="https://maps.google.com/maps?q=Avenida%20Paulista%2C%20900%2C%20S%C3%A3o%20Paulo%2C%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="chamada-final">
        <span>🍦 💚 🍨</span>
        <h2>Bateu a vontade de um doce?</h2>
        <p>Seu próximo favorito pode estar a apenas alguns cliques de distância.</p>

        <Link href="/cardapio" className="cta">
          Escolher meus sabores
        </Link>
      </section>

      <footer className="footer-inicio">
        <h2>Ice Te Pego</h2>
        <p>Um sabor especial para cada momento.</p>
        <p>© {new Date().getFullYear()} Ice Te Pego</p>
      </footer>
    </>
  );
}