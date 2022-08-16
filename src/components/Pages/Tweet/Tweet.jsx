import React from 'react'
import { useState } from 'react';

export const Tweet = () => {
    const textTarea = useState(null);
    const [texto, setTexto] = useState([]);
    function impresion() {
      setTexto([texto, textTarea.current.value]);
    }
    function borrarImpresion() {
      setTexto([]);
    }
    
  return (
    <div>
      <h1>Tweet</h1>
      <div className='contTarea'>
        <textarea name="" ref={textTarea} id="" cols="30" rows="10"></textarea>
        <button onClick={impresion}>imprimir</button>
        <button onClick={borrarImpresion}>eliminar</button>
        <div className='impresion'>{texto}</div>
      </div>
    </div>
  )
}
