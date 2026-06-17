import { create } from "zustand";

//definimos o contrato (Type) do noss estado global do sidebar
interface SidebarState {
  isOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

//criamos a store de forma últra simples, sem a complexidade do redux
export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: true, //estado inicial
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  closeSidebar: () => set({ isOpen: false }),
}));
