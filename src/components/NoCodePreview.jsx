import { useStore } from '../store/useStore'
const NoCodePreview = ({selectedComponent}) => {    
console.log(selectedComponent);

  return (
    <div className="md:w-1/2 h-130">
        <h1 className='text-neutral-50'>Hi this is the NoCodePreview</h1>
    </div>
  )
}

export default NoCodePreview