import React from 'react'

export default function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
  const month = `0${expirationMonth}`.slice(-2);
  const year = expirationYear.toString().slice(-2);

  return (
    <div className='flex flex-col gap-6 border items-start p-4 rounded-lg w-[350px] h-[200px]' style={{ backgroundColor: bgColor , color: color}} >
      <div className='self-end'>{type}</div>
      <div className='self-center text-2xl'><span className='text-4xl'>•••• •••• ••••</span> {number.slice(-4)}</div>
      <div className='flex flex-col items-start'>
        <p className='flex gap-8'>Expires {month} / {year} <span>{bank}</span></p>
        <p>{owner}</p>
      </div>
    </div>
  )
}
