//IMPORTANTE: por padrão no nextjs App Router, todos os arquivos são SERVER COMPONENTS
//este arquivo roda diretamente no servidor da empresa, não envia lixo para o browser do cliente

import { Badge } from "@/components/ui/badge";

//simulação de uma função que vai buscar dados de um banco de dados, API
async function getProjetosData() {
  return [
    { id: 1, name: "Vipe Social", tipo: "SSR (Dados Dinâmicos)" },
    { id: 2, name: "App Flutter", tipo: "SSG (Dados Estáticos)" },
  ];
}

export default async function RenderizacaoPage() {
  const projetos = await getProjetosData();

  return (
    <div className="max-w-5xl mx-auto w-full flex flex-col gap-6 sm:gap-8 lg:gap-10 px-4 py-2 sm:px-6">
      {/* cabeçalho Mentorante */}
      <div className="space-y-1 sm:space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-400 leading-tight tracking-tight">
          Next.js - Redering Engine.
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl leading-relaxed">
          Demonstração de arquitetura focada em performance e Core Web Vitals.
        </p>
      </div>

      {/* Bloco explicativo - o que o Tech Lead quer ler */}
      <div className="bg-slate-800/50 p-4 sm:p-6 md:p-8 rounded-2xl border border-slate-700/80 backdrop-blur-sm">
        <h2 className="text-base sm:text-lg md:text--2xl font-bold mb-3 sm:mb-5 text-white flex items-center gap-2">
          <span className="text-2xl sm:text-3xl"> 🧠 </span> Guia do Mentor:
          Server vs Client Components
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 text-xs sm:text-sm text-slate-300">
          <div className="bg-slate-900 p-4 rounded-lg">
            <span className="text-emerald-400 font-bold block mb-1">
              ⚡ React Server Components (RSC)
            </span>
            <p className="leading-relaxed">
              É o padrão aqui. O HTML é gerado no servidor. Vantagem: Menos
              JavaScript enviado para o cliente, carregamento instantâneo e
              melhor SEO.
            </p>
          </div>

          <div className="bg-slate-900/90 p-3 sm:p-5 rounded-xl border border-slate-700/50 h-full flex flex-col gap-1">
            <span className="text-amber-400 font-bold block mb-1">
              🖥️ Client Components (use client)
            </span>
            <p className="leading-relaxed">
              Só adicionamos a diretiva no topo se precisarmos de hooks
              (`useState`, `useEffect`) ou interações como cliques e modais.
            </p>
          </div>
        </div>
      </div>

      {/* Demonstração prática dos dados vindo do Servidor */}
      <div className="bg-slate-800/50 p-4 sm:p-6 md:p-8 rounded-2xl border border-slate-700/80 backdrop-blur-sm">
        <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:mb-6 text-white flex items-center gap-2">
          <span className="text-xl">
            Dados Renderizados no Servidor (Zero Hydration Cost)
          </span>
        </h3>

        <div className="flex flex-col gap-2 sm:gap-3">
          {projetos.map((proj) => (
            <div
              key={proj.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 bg-slate-900/90 p-3 sm:p-4 rounded-xl border border-slate-700/50 transition-colors hover:border-emerald-500/30"
            >
              <span className="text-sm sm:text-base md:text-lg font-medium text-slate-200 truncate max-w-200px xs:max-w-250px sm:max-w-none">
                {proj.name}
              </span>
              <div className="shrink-0 self-start sm:self-center">
                <Badge
                  variant="secondary"
                  className="text-xs sm:text-sm whitespace-nowrap px-2 py-0.5 sm:px-3"
                >
                  {proj.tipo}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
