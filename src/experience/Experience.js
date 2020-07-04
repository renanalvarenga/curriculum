import React from 'react'

import styled from 'styled-components'
import Ativaidade from './pictureativaidade.jpg'
import Viajamente from './pictureviajamente.jpg'

function Experience() {
  return (
    <ExperienceContent id="experiencia">
      <h1>Experiência</h1>
      <hr />
        <div>
          <div>
            <img src={Ativaidade} alt="logoAtivaidade" />
              <p><b>Ativaidade</b> - Academia</p>
          </div>
          <div>
            <a href='https://www.viajamente.com.br' target='_blank' rel="noopener noreferrer">
              <img src={Viajamente} alt="logoViajamente" />
            </a>
              <p><b>Viajamente</b> - Produtora audiovisual</p>
          </div>
        </div>
    </ExperienceContent>
  )
}

export default Experience;

const ExperienceContent = styled.section`
  padding: 0 220px 25px 220px;
  height: 400px;

  & > div {
    display: flex;
    justify-content: center;
    margin-bottom: 25px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      &:first-child {
        margin-right: 20%;
      }

      img {
        width: 300px;
        height: 180px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);

        &:hover {
          transform: scale(1.1);
          cursor: pointer;
        }
      }
    }
  }

  @media only screen 
  and (min-width: 320px) 
  and (max-width: 568px) {
    padding: 0 0px 25px 0px;
    height: auto;

    & > div {
      flex-direction: column;

      div:first-child {
        margin-right: 0;
      }

      img:first-child {
        padding-right: 0px;
      }
    }
  } 
`
