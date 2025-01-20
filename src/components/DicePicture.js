import React from 'react'

export default function DicePicture() {

  const RandomNumber = Math.floor(Math.random()*(6 - 1) + 1);
  function revealDice() {
    let baseIndex = 0;
  }

  return (
    <div className='relative'>
      <img src="../.. /dice-empty.png" alt="dice-empty" />
    </div>
  )

}
