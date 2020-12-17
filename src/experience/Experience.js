import React from 'react'

import styled from 'styled-components'
import Viajamente from './pictureViajamente.png'
import Michelon from './pictureMichelon.png'
import Ativaidade from './pictureAtivaidade.png'

function Experience() {
  return (
    <ExperienceContent id="portfolio">
      <h1>Portfólio</h1>
      <hr />
        <div>
          <div>
            <a href='https://www.viajamente.com.br' target='_blank' rel="noopener noreferrer">
              <img src={Viajamente} alt="logoViajamente" />
            </a>
              <h3><b>Viajamente</b></h3>
              <p>Produtora audiovisual</p>
          </div>
          <div>
            <a href='https://www.michelonauditores.com.br/' target='_blank' rel="noopener noreferrer">
              <img src={Michelon} alt="logoMichelon" />
            </a>
              <h3><b>Michelon Auditores</b></h3>
              <p>Empresa de auditoria e consultoria</p>
          </div>
          <div>
            <a href='https://www.ativaidadesaude.com.br/' target='_blank' rel="noopener noreferrer">
              <img src={Ativaidade} alt="logoAtivaidade" />
            </a>
              <h3><b>Ativaidade</b></h3>
              <p>Academia de musculação e pilates</p>
          </div>
        </div>
    </ExperienceContent>
  )
}

export default Experience;

const ExperienceContent = styled.section`
  padding: 0 220px 25px 220px;
  height: auto;

  & > div {
    display: flex;
    justify-content: center;
    margin-bottom: 25px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;

      img {
        height: 170px;

        &:hover {
          transform: scale(1.1);
          cursor: pointer;
        }
      }

      p {
        margin-top: 0;
      }
    }
  }

  @media only screen 
  and (min-width: 320px) 
  and (max-width: 568px) {
    padding: 0 0 25px 0;
    height: auto;

    & > div {
      flex-direction: column;
      margin-right: 0;
    }

      img {
        height: 140px;
        width: 280px;
    }
  } 
`
