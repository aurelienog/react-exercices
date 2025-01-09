import React from 'react'

export default function Greetings({lang, children}) {
  const greetings = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  }

  return (
    <div className='border'>

      <p>
        <span className='m-2'>{greetings[lang]}</span>
        <span>{children}</span>
      </p>
    </div>
  )
}


