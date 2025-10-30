import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
     persist(
          (set)=>({
          selectedComponent: null,
          setSelectedComponent: (component) => set({ selectedComponent: component }),
           
          active:'nocode',
          setActive:(currentActive) => set({active:currentActive}),

     }),
     {
        name: "component-storage",   
     }
) 
     )