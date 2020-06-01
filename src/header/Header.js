import React from 'react'
import './header.css'

function Header() {
  return (
    <section className='header'>
      <nav>
        <ul>
          <li><a href="#certificados">Certificados</a></li>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#hobbies">Idiomas e Interesses</a></li>
        </ul>
      </nav>
    </section>
  )
}

export default Header;
