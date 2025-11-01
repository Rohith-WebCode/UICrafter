import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import CodeEditor from "./CodeEditor";
import ToggleView from "./ToggleView";
import { useStore } from "../store/useStore";
import NoCodeEditor from "./NoCodeEditor";
 

const Editors  = () => {
  const Active = useStore((state) => state.active)
  console.log(Active);
  
  return (
    <div className='w-full h-130 bg-[#212121] rounded-lg border-0'>
    <div className='px-6 py-2'>
      <div className='flex md:flex-row flex-col items-center py-2 justify-between'>
        <div className="flex gap-2 items-center">
          <FaHtml5 className='text-lg text-orange-600'/>
         <p className='text-sm md:text-md text-neutral-50'>HTML</p>
          <RiTailwindCssFill className='text-lg text-blue-400'/>
         <p className='text-sm md:text-md text-neutral-50'>TailwindCSS</p>
        </div>

        <div>
       <ToggleView/>
          </div>
      </div>
      {
        Active === 'code' ?
        <CodeEditor/>
        :
        <NoCodeEditor/>
      }

    </div>
    
    </div>
  )
}

export default Editors 