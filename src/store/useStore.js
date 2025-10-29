import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
     persist(
          (set)=>({
          selectedComponent: null,
          setSelectedComponent: (component) => set({ selectedComponent: component }),
     }),
     {
        name: "component-storage",   
     }
) 
     )