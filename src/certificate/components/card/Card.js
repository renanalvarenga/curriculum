import React from 'react'

import LinkIcon from '@material-ui/icons/Link'

import './card.css'

function Card({identificador}) {
  return (
    <div className='card'>
      <div>
        {identificador.icon}
        <h4 title={identificador.title}>{identificador.title}</h4>
      </div>
      <a href={identificador.href}> 
        <LinkIcon />
        <h4 title='Certificado'>Certificado</h4>
      </a>
    </div>
  )
}

export default Card;
