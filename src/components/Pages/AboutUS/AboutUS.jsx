import React from 'react'
import { useState } from 'react'

export const AboutUS = () => {
  
  const [text, setText] = useState("");

  return (
    <div>
      <h1>impresion de input</h1>
      <input type="text" onKeyUp={(event)=>setText(event.target.value)}/>
      <div>{text}</div>
    </div>
  )
}
