import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevJunior - Journey | Willians Tavares",
  description:
    "Portfólio de engenharia de software e UI/UX de um Desenvolvedor Front-End e Mobile.",
};

//componente de navegação (Client Component para interatividade)
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="hover:text-emerald-400 transition-colors">
      {children}
    </Link>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.className} h-full antialiased`}>
      <body className="bg-slate-900 text-slate-200 min-h-screen flex flex-col">
        <header className="border-b border-slate-700 bg-slate-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="text-xl font-bold text-emerald-400">
              🚀 Next.js Guide
            </Link>
            <nav className="flex flex-wrap gap-4 text-sm">
              <NavLink href="/server-components">Server</NavLink>
              <NavLink href="/client-components">Client</NavLink>
              <NavLink href="/roteamento">Rotas</NavLink>
              <NavLink href="/data-fetching">Dados</NavLink>
              <NavLink href="/estilizacao">Estilo</NavLink>
              <NavLink href="/imagens-fontes">Mídia</NavLink>
              <NavLink href="/metadados">SEO</NavLink>
              <NavLink href="/estado-global">Estado</NavLink>
              <NavLink href="/server-actions">Actions</NavLink>
            </nav>
          </div>
        </header>
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-8">
          {children}
        </main>
        <footer className="border-t border-slate-700 py-6 text-center text-sm text-slate-400">
          Feito com 💚 para aprender Next.js App Router
        </footer>
      </body>
    </html>
  );
}
