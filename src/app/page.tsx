import Link from "next/link";

const topics = [
  {
    slug: "server-components",
    title: "Server Components",
    desc: "O coração do Next.js: zero JavaScript no cliente, performance máxima.",
  },
  {
    slug: "client-components",
    title: "Client Components",
    desc: "Interatividade com 'use client', hooks e eventos.",
  },
  {
    slug: "roteamento",
    title: "Roteamento",
    desc: "Rotas estáticas, dinâmicas e navegação com Link.",
  },
  {
    slug: "data-fetching",
    title: "Data Fetching",
    desc: "SSG, SSR, ISR e cache com fetch.",
  },
  {
    slug: "estilizacao",
    title: "Estilização",
    desc: "Tailwind, CSS Modules e classes condicionais.",
  },
  {
    slug: "imagens-fontes",
    title: "Imagens e Fontes",
    desc: "Otimização automática com next/image e next/font.",
  },
  {
    slug: "metadados",
    title: "Metadados (SEO)",
    desc: "Título, descrição e Open Graph.",
  },
  {
    slug: "estado-global",
    title: "Estado Global",
    desc: "Gerenciamento com Zustand de forma simples.",
  },
  {
    slug: "server-actions",
    title: "Server Actions",
    desc: "Mutações sem API: formulários que chamam o servidor.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold text-emerald-400">
          Guia Prático do Next.js
        </h1>
        <p className="text-slate-400 mt-2 text-lg">
          Explore cada conceito clicando nos cards abaixo. Todos os exemplos são
          funcionais e comentados.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/${topic.slug}`}
            className="group bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-all hover:bg-slate-800/80"
          >
            <h2 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition">
              {topic.title}
            </h2>
            <p className="text-sm text-slate-400 mt-1">{topic.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
