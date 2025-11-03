import { memo, Suspense, lazy } from "react";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { useStore } from "../store/useStore";
import ToggleView from "./ToggleView";

const CodeEditor = lazy(() => import("./CodeEditor"));
const NoCodeEditor = lazy(() => import("./NoCodeEditor"));

const Editors = () => {
  const active = useStore((state) => state.active);

  return (
    <div className="w-full h-130 bg-[#212121] rounded-lg border border-gray-700 shadow-md transition-all duration-300">
      <div className="px-6 py-3">
        <div className="flex md:flex-row flex-col items-center justify-between py-2">
          <div className="flex gap-3 items-center">
            <FaHtml5 className="text-xl text-orange-600" />
            <p className="text-sm md:text-md text-neutral-50 font-medium">HTML</p>
            <RiTailwindCssFill className="text-xl text-blue-400" />
            <p className="text-sm md:text-md text-neutral-50 font-medium">TailwindCSS</p>
          </div>

          <ToggleView />
        </div>

        <div className="mt-2">
          <Suspense
            fallback={
              <div className="text-neutral-300 text-sm p-4">
                Loading {active === "code" ? "Code Editor..." : "No-Code Editor..."}
              </div>
            }
          >
            {
              active === 'code' ? <CodeEditor/> :  <NoCodeEditor />
            }
            
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default memo(Editors);
