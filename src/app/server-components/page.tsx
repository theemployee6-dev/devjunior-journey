/*
Este arquivo é um Server Component por padrão sem usar "use client".
ele roda apenas no servidor, não envia JavaScript para o navegador.
*/

//Podemos usar async/await diretamente

async function getData() {
  //simular uma chamada a banco de dados ou API
  //no mundo real: fetch("https://api.exemplo.com/dados")
  await new Promise((resolve) => setTimeout(resolve, 1000)); //delay proposital
  return {
    messagem: "Este dado foi buscado no servidor!",
    timestamp: new Date().toISOString(),
  };
}

export default async function ServerComponentsPage() {
  const data = await getData(); //busca os dados no servidor

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-emerald-400">
        ⚡ Server Components
      </h1>

      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 space-y-4">
        <p className="text-slate-300">
          <strong className="text-white">O que são?</strong> Componentes que
          executam{" "}
          <span className="text-emerald-400">exclusivamente no Servidor</span>.
          O HTML é gerado lá e enviado ao cliente. Isso resulta em:
        </p>

        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>
            ✅ <span className="text-white">Zero JavaScript</span> no cliente
            (menos bundle, mais performance).
          </li>

          <li>
            ✅ <span className="text-white">Carregamento instantâneo</span> no
            cliente (sem hydration pesada).
          </li>

          <li>
            ✅ <span className="text-white">Melhor SEO</span> (conteúdo pronto
            para crawlers).
          </li>

          <li>
            ✅ <span className="text-white">Acesso direto</span> a bancos de
            dados e APIS
          </li>
        </ul>

        <p className="text-slate-300">
          <strong className="text-white">Regra de ouro:</strong> Sempre prefira
          Server Components a menos que precise interatividade (cliques, hooks).
        </p>
      </div>

      {/* Exemplo prático de dados vindos do servidor */}
      <div className="bg-slate-800/70 p-6 rounded-xl border border-slate-700">
        <h2 className="text-xl font-semibold text-white mb-2">
          Dado buscado no Servidor:
        </h2>
        <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm text-emerald-300">
          {JSON.stringify(data, null, 2)}
        </div>
        <p className="text-xs text-slate-400 mt-2">
          Este dado foi renderizado no servidor e não há código JavaScript para
          atualizá-lo no cliente.
        </p>
      </div>
    </div>
  );
}
