import React from 'react'
import { useState } from 'react'

export const Home = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1>Contador de clicks</h1>
      <div className='divcontador'>
      <h2>{counter}</h2>
        <button onClick={()=>setCounter(counter + 1)}>sumar</button>
        <button onClick={()=>setCounter(counter - 1)}>restar</button>
        <button onClick={()=>setCounter(0)}>Reset</button> 
      </div>
    </div>
  )
}
