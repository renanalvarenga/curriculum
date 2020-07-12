import React from 'react'

import styled from 'styled-components'

function Header() {
  return (
    <HeaderContent>
      <nav>
        <ul>
          <li><a href="#certificados">Certificados</a></li>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#hobbies">Idiomas e Interesses</a></li>
        </ul>
      </nav>
    </HeaderContent>
  )
}

export default Header;

const HeaderContent = styled.section`
  nav {
    background-color: rgb(0, 0, 0);
    
    ul > li > a {
      text-transform: uppercase;
    }
  }

  @media only screen 
  and (min-width: 320px) 
  and (max-width: 568px) {
    display: none;
  } 
`
