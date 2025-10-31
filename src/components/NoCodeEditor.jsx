import React from 'react'

const NoCodeEditor = () => {
  return (
    <div className='flex gap-2'>
      <label className='text-2xl text-neutral-50'>Text</label>
      <input type='text' className='border border-r-amber-400'/>
    </div>
  )
}

export default NoCodeEditor