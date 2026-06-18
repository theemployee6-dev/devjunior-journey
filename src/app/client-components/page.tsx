"use client";

import { useState } from "react";

export default function ClientComponentsPage() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-amber-400">
        🖥️ Client Components
      </h1>

      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 space-y-4">
        <p className="text-slate-300">
          <strong className="text-white">O que são?</strong> Componentes que
          executam{" "}
          <span className="text-amber-400">no servidor E no cliente</span>
          (hydration). São usados quando você precisa de:
        </p>

        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>
            ✅ <span className="text-white">Hooks</span> (useState, useEffect,
            etc.)
          </li>

          <li>
            ✅ <span className="text-white">Eventos</span> (onClick, onChange,
            onSubmit.)
          </li>

          <li>
            ✅ <span className="text-white">APIs do navegador</span>{" "}
            (localStorage, window, etc.)
          </li>
        </ul>

        <p className="text-slate-300">
          <strong className="text-white">Regra de ouro: </strong>Só use
          &quot;use client&quot; quando for estritamente necessário. Prefira
          Server Components para tudo o que for estático.
        </p>
      </div>

      {/* Exemplo interativo */}
      <div className="bg-slate-800/70 p-6 rounded-xl border border-slate-700 space-y-4">
        <h2 className="text-xl font-semibold text-white">Exemplo Interativo</h2>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCount((c) => c - 1)}
            className="px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition cursor-pointer select-none"
          >
            -
          </button>
          <span className="text-2xl font-mono text-white min-w-3rem text-center">
            {count}
          </span>
          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-lg hover:bg-emerald-500/30 transition cursor-pointer select-none"
          >
            +
          </button>
        </div>

        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Digite algo..."
            className="w-full bg-slate-900 text-white p-2 rounded-lg border border-slate-600 focus:border-emerald-400 outline-none"
          />
          <p className="text-sm text-slate-400 mt-1">
            você digitou:{" "}
            <span className="text-emerald-300">{text || "(vazio)"}</span>
          </p>
        </div>

        <p className="text-xs text-slate-400">
          Este componente usa estado e eventos - tudo isso exige que o código
          seja executado no cliente (hydration).
        </p>
      </div>
    </div>
  );
}
