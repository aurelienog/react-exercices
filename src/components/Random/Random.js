import React from 'react'

export default function Random({min, max}) {
  let randomNumber = Number;
  function getRandomArbitrary(min, max) {
    return randomNumber = Math.floor(Math.random() * (max - min) + min)
  }

  getRandomArbitrary(min, max)

  return (
    <div className='border'> 
      <p>
        Random value between {min} and {max}: {randomNumber}
      </p>
    </div>
  )
}

