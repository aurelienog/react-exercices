import React, { useState } from 'react'

export default function Carousel({images}) {
  const [imageIndex, setImageIndex] = useState(0)
  const handleClick = (offset) => {
    setImageIndex( prev => {
      const next = prev + offset

      if(next > images.length -1) {
        return 0
      }
      if(next < 0) {
        return images.length -1
      }

      return next
    })
  }
  return (
    <div>
      <figure>
        <img src={images[imageIndex]} alt="" />
      </figure>
      <div className='flex'>
        <button onClick={() => handleClick(-1)}>left</button>
        <button onClick={() => handleClick(+1)}>right</button>
      </div>

    </div>
  )
}
