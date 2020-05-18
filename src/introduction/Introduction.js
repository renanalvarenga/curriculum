import React from 'react'
import './introduction.css'
import Keyboard from './keyboard.jpg'

function Introduction() {
  return (
    <section className='introducao'>
      <img src={Keyboard} alt="keyboard"/>
      <h1>Renan Alvarenga</h1>
      <h4>Sou estudante de programação, e busco oportunidade profissional que permita meu crescimento intelectual, profissional e técnico na área do desenvolvimento front-end. </h4>
    </section>
  )
}

export default Introduction;
