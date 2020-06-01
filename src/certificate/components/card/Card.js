import React from 'react'
import LinkIcon from '@material-ui/icons/Link'

import './card.css'

function Card({identificador}) {
  return (
    <div className='card'>
      <div>
        {identificador.icon}
        <h4>{identificador.title}</h4>
      </div>
      <a href={identificador.href}> 
        <LinkIcon />
        <h4>Certificado</h4>
      </a>
    </div>
  )
}

export default Card;
