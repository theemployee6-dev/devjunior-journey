import Link from "next/link";

export default function RoteamentoPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-400">🧭 Roteamento</h1>

      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 space-y-4">
        <p className="text-slate-300">
          O Next.js usa um sistema de{" "}
          <span className="text-white">roteamento baseado em pastas</span>. Cada
          pasta dentro de{" "}
          <code className="bg-slate-900 px-2 py-1 rounded">app/</code> com um
          arquivo{" "}
          <code className="bg-slate-900 px-2 py-1 rounded">page.tsx</code> vira
          uma rota.
        </p>

        <ul className="text-slate-300 space-y-2 list-disc list-inside">
          <li>
            <code className="bg-slate-900 px-2 py-1 rounded">app/page.tsx</code>{" "}
            → <span className="text-emerald-400">/</span>
          </li>

          <li>
            <code className="bg-slate-900 px-2 py-1 rounded">
              app/sobre/page.tsx
            </code>{" "}
            → <span className="text-emerald-400">/sobre</span>
          </li>

          <li>
            <code className="bg-slate-900 px-2 py-1 rounded">
              app/blog/[slug]/page.tsx
            </code>{" "}
            → <span className="text-emerald-400">/blog/meu-post</span> (rota
            dinâmica)
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/roteamento/exemplo-1"
          className="bg-slate-800/70 p-4 rounded-xl border border-slate-700 hover:border-emerald-400 transition text-center"
        >
          <span className="text-emerald-400">/roteamento/exemplo-1</span>
          <p className="text-sm text-slate-400">Rota estática</p>
        </Link>

        <Link
          href="/roteamento/exemplo-2"
          className="bg-slate-800/70 p-4 rounded-xl border border-slate-700 hover:border-emerald-400 transition text-center"
        >
          <span className="text-emerald-400">/roteamento/exemplo-2</span>
          <p className="text-sm text-slate-400">Outra rota estática</p>
        </Link>

        <Link
          href="/roteamento/dinamico/hello-world"
          className="bg-slate-800/70 p-4 rounded-xl border border-slate-700 hover:border-emerald-400 transition text-center"
        >
          <span className="text-emerald-400">
            /roteamento/dinamico/hello-world
          </span>
          <p className="text-sm text-slate-400">Rota dinâmica (slug)</p>
        </Link>

        <Link
          href="/roteamento/dinamico/nextjs-guide"
          className="bg-slate-800/70 p-4 rounded-xl border border-slate-700 hover:border-emerald-400 transition text-center"
        >
          <span className="text-emerald-400">
            /roteamento/dinamico/nextjs-guide
          </span>
          <p className="text-sm text-slate-400">Outro slug dinâmico</p>
        </Link>
      </div>

      <div className="bg-slate-800/70 p-6 rounded-xl border border-slate-700">
        <h2 className="text-lg font-semibold text-white mb-2">
          Navegação com Link
        </h2>

        <p className="text-slate-300">
          Use o componente{" "}
          <code className="bg-slate-900 px-2 py-1 rounded">
            &lt;Link href=&quot;/caminho&quot;&gt;
          </code>{" "}
          para navegação com client-side (não recarrega a página).
        </p>
      </div>
    </div>
  );
}
