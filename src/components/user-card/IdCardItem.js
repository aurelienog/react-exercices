import React from 'react'

export default function IdCardItem({lastName, firstName, picture, height, gender}) {
  return (
    <div className='border flex items-center'>
      <figure className='m-8'>
        <img src={picture} alt=""></img>
        </figure>
      <div>
        <ul>
          <li className="flex gap-1"><span className='font-bold'>LastName</span>{lastName}</li>
          <li className="flex gap-1"><span className='font-bold'>FirstName</span>{firstName}</li>
          <li className="flex gap-1"><span className='font-bold'>Gender</span>{gender}</li>
          <li className="flex gap-1"><span className='font-bold'>Height</span>{height}</li>
        </ul>
      </div>
    </div>
  )
}
