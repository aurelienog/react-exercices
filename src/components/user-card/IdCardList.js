import React from 'react'
import IdCardItem from './IdCardItem'

export default function IdCardList() {
  return (
    <div className='w-[80%]'>
      <IdCardItem 
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}

  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCardItem
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}

  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
    </div>
  )
}
