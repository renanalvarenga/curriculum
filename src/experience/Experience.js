import React from 'react'
import './experience.css'
import Ativaidade from './logoAtivaidade.png'
import Viajamente from './logoViajamente.png'



function Experience() {
  return (
    <section id="experiencia" className='experience'>
      <h1>Experiência</h1>
      <hr className='detalhe'></hr>
        <div>
        <img src={Ativaidade} width='240px' height='70px' alt="logoAtivaidade"/>
        <img src={Viajamente} width='135px' height='120px' alt="logoViajamente"/>
        </div>
    </section>
  )
}

export default Experience;
