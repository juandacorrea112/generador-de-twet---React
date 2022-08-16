import React from 'react'
import { useState } from 'react'

export const ContactUS = () => {

  const [names, setNames] = useState([]);
  const people = [{name:"sebastian"}, {name:"dairon"}, {name:"carlos"},{name:"carl jhonson"}];
  const hendles = () => setNames(people);
  const hidden = () => setNames([]);

  return (
    <div>
      <h1>Mostrar y ocultar nombres</h1>
      <div className='divlist'>
        <button className='showNames'onClick={hendles}>mostrar nombres</button>
        <button className='disguiseNames' onClick={hidden}>Ocultar nombres</button>
        <ul>
          {names.map((nombre) => {
            return (
                <li>
                  {nombre.name}
                </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
