//Está é uma rota dinâmica. O parâmetro "slug" vem da URL

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function RotaDinamicaPage({ params }: Props) {
  /* 
    No Next.js 15+, params é uma Promise, então precisamos de await
    mas como é um server component assíncrono, podemos usar async/await.
    por simplicidade, aqui vamos usar diretament.
    */
  const { slug } = await params;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-purple-400">🔗 Rota Dinâmica</h1>

      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
        <p className="text-slate-300">
          Você está na rota:{" "}
          <span className="text-white font-mono">/roteamento/{slug}</span>
        </p>

        <p className="text-slate-400 text-sm mt-2">
          O valor do slug é:{" "}
          <span className="text-emerald-400 font-mono">{slug}</span>
        </p>

        <p className="text-slate-400 text-sm mt-4">
          Este componente é Server Component e recebe o parâmetro via Props.
          Você pode usá-lo para buscar dados específicos, como um post de blog.
        </p>
      </div>
    </div>
  );
}
