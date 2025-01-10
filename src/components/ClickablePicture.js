import { React, useState } from 'react'

export default function ClickablePicture() {
  const [glasses, setGlasses] = useState(-10)
  const handleGlasses = () => setGlasses((prev) => prev === -10 ? 0 : -10)

  return (
    <div className='relative' onClick={handleGlasses}>
      <figure className='m-10 aspect-square w-44 absolute'>
        <img src="../../maxence.png" alt="" className='mx-auto'/>
      </figure>
      <figure className='m-10 aspect-square w-44 absolute top-0 left-0' style={{zIndex : glasses}}>
        <img src="../../maxence-glasses.png" alt="" className='mx-auto'/>
      </figure>
    </div>
  )
}
