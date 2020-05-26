import React from 'react'
import LinkIcon from '@material-ui/icons/Link'

import './card.css'

function Card({identificador}) {
  return (
    <div className='card'>
      <div>
        <span>{identificador.icon}</span>
        <h4>{identificador.title}</h4>
      </div>
      <a href={identificador.href}> 
        <span className='iconeCertificado'><LinkIcon /></span>
        <h4>Certificado</h4>
      </a>
    </div>
  )
}

export default Card;
