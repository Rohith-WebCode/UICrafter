import { create } from "zustand";
import { persist } from "zustand/middleware";
import {schemaComponents} from '../data/components'

export const useStore = create(
     persist(
          (set,get)=>({ 
               selectedComponent: null,
               setSelectedComponent: (component) => set({ selectedComponent: component }),
               
               active:'nocode',
               setActive:(currentActive) => set({active:currentActive}),
               
               components: schemaComponents,
               getComponentById:(id)=> get().components.find((c)=> c.id === id)
     }),
     {
        name: "component-storage",   
     }
) 
     )