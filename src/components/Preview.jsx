import React from 'react'
import CodePreview from './CodePreview'
import { useStore } from '../store/useStore'
import NoCodePreview from './NoCodePreview'

const Preview = () => {
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