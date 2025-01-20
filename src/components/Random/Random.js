import React from 'react'

export default function Random({min, max}) {
  const random = Math.floor(Math.random() * (max - min) + min)


  return (
    <div className='border'> 
      <p>
        Random value between {min} and {max}: {random}
      </p>
    </div>
  )
}

