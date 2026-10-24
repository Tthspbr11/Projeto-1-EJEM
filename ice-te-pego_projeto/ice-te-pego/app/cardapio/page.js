import ProdutoCard from "@/components/ProdutoCard";
import { sabores } from "@/lib/sabores";

export const metadata = { title: "Cardápio | Ice Te Pego" };

// Server Component: o catálogo é montado no servidor, sem JS extra no navegador
export default async function Cardapio() {
  // TODO: trocar por consulta ao banco (ex.: await db.sabores.findMany())
  const lista = sabores;
  return (
    <section>
      <h1>Cardápio</h1>
      <div className="grade">
        {lista.map((p) => <ProdutoCard key={p.id} produto={p} />)}
      </div>
    </section>
  );
}
