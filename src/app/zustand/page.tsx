//como vamos usar cliques e estados interativos na página, precisamos avisar o Next.js:
"use client";

import { useSidebarStore } from "@/store/useSidebarStore";
import { Button } from "@/components/ui/button";

export default function ZustandPage() {
  //puxamos as variáveis e funções da nossa store Global
  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <div className="max-w-5xl mx-auto w-full flex flex-col gap-6 sm:gap-8 lg:gap-10 px-4 py-2 sm:px-6">
      <div className="space-y-1 sm:space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-400 leading-tight tracking-tight">
          State Management com Zustand
        </h1>
        <p className="text-xs sm:text-sm md:text-basetext-slate-400 max-w-2xl leading-relaxed">
          Substituindo o Redux por uma arquitetura de estado atómico, leve e
          reativa
        </p>
      </div>

      {/* Caixa de Controle Iterativa */}
      <div className="bg-slate-800 p-4 sm:p-6 md:p-8 rounded-2xl border border-slate-700 flex flex-col gap-4">
        <h2 className="text-base sm:text-lg md:text-2xl font-bold mb-3 sm:mb-5 text-white flex items-center gap-2">
          Simulador de Estado Global
        </h2>

        <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <span
              className={`w-3 h-3 rounded-full ${isOpen ? "bg-emerald-500" : "bg-red-500"}`}
            ></span>
            <span className="text-sm font-medium text-slate-300">
              A Sidebar global está atualmente:{" "}
              <strong className="uppercase">
                {isOpen ? "aberta" : "fechada"}
              </strong>
            </span>
          </div>
        </div>

        <div>
          {/* Clicar aqui altera o estado no projeto inteiro instantaneamente */}
          <Button variant="secondary" onClick={toggleSidebar}>
            Disparar Toggle da Sidebar
          </Button>
        </div>
      </div>

      {/* Explicação Teórica Mentorada */}
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
        <h3 className="text-lg font-bold text-white mb-3">
          Porque escolhemos Zustand nesta Arquitetura?
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
          <li>
            <strong className="text-emerald-400">Sem Boilerplate:</strong> Ao
            contrário do Redux, não precisamos de criar Actions, Reducers ou
            types complexos para tarefas simples.
          </li>

          <li>
            <strong className="text-emerald-400">Performance:</strong> O
            componente só faz re-render quando a parte do estado específico que
            ele está a escutar muda.
          </li>

          <li>
            <strong className="text-emerald-400">Instalação Simples:</strong>
            Um único arquivo central resolve a comunicação entre componentes
            distantes.
          </li>
        </ul>
      </div>
    </div>
  );
}
