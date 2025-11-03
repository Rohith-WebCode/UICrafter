import React from 'react'
import CodePreview from './CodePreview'
import { useStore } from '../store/useStore'
import NoCodePreview from './NoCodePreview'

const Preview = ({selectedComponent}) => {
  console.log(selectedComponent);
  
     const Active = useStore((state) => state.active)
  return (
    <div className='w-full'>
    { Active  === 'code' ?
       <CodePreview/>
       :
       <NoCodePreview/>
      }
    </div>
  )
}

export default Preview