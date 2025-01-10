import React from 'react'
import Rating from './Rating'

export default function DriverCard({name, rating, img, car}) {
  return (
    <div className='flex m-8 bg-blue-600 w-[40%] py-10 gap-1 items-center justify-center text-white rounded-lg'>
      <figure className=' aspect-square w-24'>
      <img src={img} alt="" className='object-cover aspect-square border rounded-full w-full' />
      </figure>
      <div className='flex flex-col gap-1 text-start bg-blue-600 w-[40%] p-2 text-white rounded-lg'>
        <h3 className='text-xl font-bold'>{name}</h3>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
      
      
    </div>
  )
}
