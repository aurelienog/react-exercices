import React from 'react'

export default function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
  const lastNumber = number.slice(-4)

  return (
    <div className='flex flex-col gap-6 border items-start p-4 rounded-lg w-[350px] h-[200px]' style={{ backgroundColor: bgColor , color: color}} >
      <div className='self-end'>{type}</div>
      <div className='self-center text-2xl'><span className='text-4xl'>•••• •••• ••••</span> {lastNumber}</div>
      <div className='flex flex-col items-start'>
        <p className='flex gap-8'>Expires {expirationMonth}/{expirationYear} <span>{bank}</span></p>
        <p>{owner}</p>
      </div>
    </div>
  )
}
