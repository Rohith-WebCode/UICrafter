import React from 'react'
import CodeEditor from '../components/Editors'
import Preview from '../components/Preview'

const Playground = () => {
  return (
    <div className='w-full h-full md:h-screen overflow-auto flex md:flex-row flex-col px-4 py-7 gap-4 bg-black'>
      <Preview/>
      <CodeEditor/>
    </div>
  )
}

export default Playground