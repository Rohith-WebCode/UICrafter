import React, { useState } from "react";
import { IoIosCode } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";
import { useStore } from "../store/useStore";


export default function ToggleView() {
  const setActive = useStore((state)=> state.setActive);
  const active = useStore((state) => state.active)

  return (
    <div className="flex items-center bg-gray-100 rounded-full p-1 my-1 w-fit shadow-sm">
      <button
        onClick={() => setActive("nocode")}
        className={`flex items-center gap-2 px-2 py-2 rounded-full text-xs font-medium transition-all
          ${active === "nocode" ? "bg-linear-to-r from-slate-500 to-indigo-500 text-white" : "text-gray-600"}
        `}
      >
        <MdDesignServices size={16} />
        Nocode
      </button>

      <button
        onClick={() => setActive("code")}
        className={`flex items-center gap-2 px-2 py-2 rounded-full text-xs font-medium transition-all
          ${active === "code" ? "bg-linear-to-r from-slate-500 to-indigo-500 text-white" : "text-gray-600"}
        `}
      >
         <IoIosCode size={16} />
        Code
      </button>
    </div>
  );
}
