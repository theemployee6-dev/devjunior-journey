import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 p24 text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col gap-4">
        <h1 className="text-5xl font-bold mb-4">DevJunior Journey</h1>
        <p className="text-slate-400 text-lg text-center">
          Bem-vindo ao meu Ecosistema de desenvolvimento. Ambiente configurado
          com sucesso!
        </p>
        <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-emerald-300">
          Sprint 01 - Em Desenvolvimento
        </span>
      </div>
    </main>
  );
}
