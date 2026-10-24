import { Fredoka } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import Header from "@/components/Header";

const fonte = Fredoka({ subsets: ["latin"], display: "swap" });

// SEO: aparece nas buscas locais do Google
export const metadata = {
  title: "Ice Te Pego | Sorveteria artesanal com entrega de gelados",
  description:
    "Sorveteria artesanal com entrega de gelados na sua cidade. Escolha o sabor, monte o carrinho e peça online.",
  keywords: ["sorveteria artesanal", "entrega de gelados", "sorvete", "NOME DA CIDADE"],
  openGraph: { title: "Ice Te Pego", description: "Sorvete artesanal entregue na sua porta.", locale: "pt_BR", type: "website" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={fonte.className}>
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
