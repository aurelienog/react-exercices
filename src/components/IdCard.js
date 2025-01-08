import { React, useEffect } from 'react'

export default function IdCard(props) {
  return (
    <div className='h-[200px] flex border p-8'>
      <figure>
        <img src={props.user.picture} alt="" />
      </figure>
      <ul>
        <li className='flex font-bold gap-1'>First name: <span className='font-medium'>{props.user.lastName}</span></li>
        <li className='flex font-bold gap-1'>Last name: <span className='font-medium'>{props.user.firstName}</span></li>
        <li className='flex font-bold gap-1'>Gender: <span className='font-medium'>{props.user.gender}</span></li>
        <li className='flex font-bold gap-1'>Height: <span className='font-medium'>{props.user.height}</span></li>
        <li className='flex font-bold gap-1'>Height: <span className='font-medium'>{props.user.birth}</span></li>
      </ul>

    </div>
  )
}


