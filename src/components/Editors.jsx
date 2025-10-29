import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import CodeEditor from "./CodeEditor";
 

const Editors  = () => {
  return (
    <div className='md:w-1/2 h-130 bg-[#212121] rounded-lg border-0'>
    <div className='px-6 py-2'>
      <div className='flex gap-2 items-center py-1'>
          <FaHtml5 className='text-lg text-orange-600'/>
         <p className='text-md text-neutral-50'>HTML</p>
          <RiTailwindCssFill className='text-lg text-blue-400'/>
         <p className='text-md text-neutral-50'>TailwindCSS</p>
      </div>
      <CodeEditor/>
    </div>
    
    </div>
  )
}

export default Editors 