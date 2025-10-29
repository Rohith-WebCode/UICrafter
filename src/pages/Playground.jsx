import React from 'react'
import CodeEditor from '../components/Editors'
import Preview from '../components/Preview'

const Playground = () => {
  return (
    <div className='w-full h-screen overflow-auto md:flex px-4 py-7  md:gap-4 bg-black'>
      <Preview/>
      <CodeEditor/>
    </div>
  )
}

export default Playground