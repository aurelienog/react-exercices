import React from 'react'

export default function BoxColor({r, g, b}) {
  function rgbToHex(r, g, b) {
    const red = r.toString(16).padStart(2, '0');
    const green = g.toString(16).padStart(2, '0');
    const blue = b.toString(16).padStart(2, '0');
    return `#${red}${green}${blue}`;
  }

  const color = rgbToHex(r, g, b);

  return (
    <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }} >
      <p>rgb({r},{g},{b}) {color}</p>
    </div>
  )
}


