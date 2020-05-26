import React from 'react'
import './introduction.css'
import Keyboard from './keyboard.jpg'
import Renan from './fotoRenan.jpg'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Introduction() {
  return (
    <section className='introducao'>
      <img src={Keyboard} alt="keyboard"/>
        <div>
          <div className='intro'>
            <img className='fotoRenan' src={Renan} alt="fotoRenan"/>
            <h1>RENAN ALVARENGA</h1>
          </div>
          <h4>Sou estudante de programação, e busco oportunidade profissional que permita meu crescimento intelectual, profissional e técnico na área do desenvolvimento front-end. </h4>
          <nav>
            <ul>
              <li><a href='mailto:renan_alvarenga92@yahoo.com.br'><MailOutlineIcon htmlColor='aqua' fontSize='large'/></a></li>
              <li><a href='https://api.whatsapp.com/send?phone=5512982621992'><WhatsAppIcon htmlColor='aqua' fontSize='large'/></a></li>
              <li><a href='https://www.linkedin.com/in/renan-alvarenga-front/'><LinkedInIcon htmlColor='aqua' fontSize='large'/></a></li>
              <li><a href='https://github.com/renanalvarenga'><GitHubIcon htmlColor='aqua' fontSize='large'/></a></li>
            </ul>
          </nav>
        </div>
    </section>
  )
}

export default Introduction;
