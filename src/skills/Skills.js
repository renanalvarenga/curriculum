import React from 'react'
import './skills.css'

function Skills() {
  return (
    <section id="habilidades" className='skills'>
      <h1>Habilidades</h1>
      <hr className='detalhe'></hr>
        <li>
          <h4>HTML</h4><span className='bar'><span className='html'></span></span>
        </li>
        <li>
          <h4>CSS</h4><span className='bar'><span className='css'></span></span>
        </li>
        <li>
          <h4>JavaScript</h4><span className='bar'><span className='javascript'></span></span>
        </li>
        <li>
          <h4>Design Responsivo</h4><span className='bar'><span className='responsivo'></span></span>
        </li>
        <li>
          <h4>React</h4><span className='bar'><span className='react'></span></span>
        </li>
        <li>
          <h4>UI/UX</h4><span className='bar'><span className='ux'></span></span>
        </li>
        <li>
          <h4>Acessibilidade</h4><span className='bar'><span className='acessibilidade'></span></span>
        </li>
        <li>
          <h4>Metodologias Ágeis</h4><span className='bar'><span className='ageis'></span></span>
        </li>
    </section>
  )
}

export default Skills;
