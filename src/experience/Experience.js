import React from 'react'
import './experience.css'
import Ativaidade from './pictureativaidade.jpg'
import Viajamente from './pictureviajamente.jpg'



function Experience() {
  return (
    <section id="experiencia" className='experience'>
      <h1>Experiência</h1>
      <hr className='detalhe'></hr>
        <div>
          <div className='empresas'>
            <img src={Ativaidade} alt="logoAtivaidade" />
              <p><b>Ativaidade</b> - Academia</p>
            </div>
          <div className='empresas'>
            <a href='https://www.viajamente.com.br' target='_blank' rel="noopener noreferrer">
              <img src={Viajamente} alt="logoViajamente" />
            </a>
              <p><b>Viajamente</b> - Produtora audiovisual</p>
          </div>
        </div>
    </section>
  )
}

export default Experience;
