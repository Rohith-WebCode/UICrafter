import Editors from '../components/Editors'
import { useStore } from '../store/useStore'
import Preview from '../components/Preview'

const Playground = () => {
  const selectedComponentId  = useStore((state) => state.selectedComponent?.id)
  console.log(selectedComponentId);
  
  const getComponentById   = useStore((state) => state.getComponentById)
  console.log(getComponentById);
  

 const selectedComponent = selectedComponentId
    ? getComponentById(selectedComponentId)
    : null;

  console.log("Selected component:", selectedComponent);
   
  return (
    <div className='w-full h-full md:h-screen overflow-auto flex md:flex-row flex-col px-4 py-7 gap-4 bg-black'>
      <Preview/>
      <Editors/>
    </div>
  )
}

export default Playground