import React from 'react'

import './introduction.css'
import Keyboard from './keyboard.jpg'
import Renan from './fotoRenan.jpg'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

import styled from 'styled-components'

import pdf from './Curriculo Renan Alvarenga.pdf'

function Introduction() {
  return (
    <IntroductionContent className='introducao'>
      <img src={Keyboard} alt="keyboard"/>
        <div>
          <div className='intro'>
            <img className='fotoRenan' src={Renan} alt="fotoRenan"/>
            <h1>RENAN ALVARENGA</h1>
          </div>
          <h4>Sou estudante de programação, e busco oportunidade profissional que permita meu crescimento intelectual, profissional e técnico na área do desenvolvimento front-end. </h4>
          <nav>
            <ul>
              <li><a href='mailto:renan.alvarengacs92@gmail.com' target='_blank' rel="noopener noreferrer"><MailOutlineIcon htmlColor='aqua' fontSize='large'/></a></li>
              <li><a href='https://api.whatsapp.com/send?phone=5512982621992' target='_blank' rel="noopener noreferrer" ><WhatsAppIcon htmlColor='aqua' fontSize='large'/></a></li>
              <li><a href='https://www.linkedin.com/in/renan-alvarenga-front/' target='_blank' rel="noopener noreferrer"><LinkedInIcon htmlColor='aqua' fontSize='large'/></a></li>
              <li><a href='https://github.com/renanalvarenga' target='_blank' rel="noopener noreferrer"><GitHubIcon htmlColor='aqua' fontSize='large'/></a></li>
              <li><a href={pdf} target='_blank' rel="noopener noreferrer"><PictureAsPdfIcon htmlColor='aqua' fontSize='large'/></a></li>
            </ul>
          </nav>
        </div>
    </IntroductionContent>
  )
}

export default Introduction;

const IntroductionContent = styled.section`
  
`