import React from 'react'

import './card.css'

function Card({identificador}) {
  return (
    <div className='card'>
      <div>
        <span>{identificador.icon}</span>
        <h4>{identificador.title}</h4>
      </div>
      <div>
        <span>Icone</span>
        <h4>Certificado</h4>
      </div>
    </div>
  )
}

export default Card;
