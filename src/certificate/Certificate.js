import React, { Fragment } from 'react'
import Card from './components/card/Card'
import './certificate.css'
import { useRouteMatch, useHistory } from 'react-router-dom'
import CodeIcon from '@material-ui/icons/Code'
import WebIcon from '@material-ui/icons/Web'
import WebAssetIcon from '@material-ui/icons/WebAsset'
import GroupIcon from '@material-ui/icons/Group'
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly'
import SportsRugbyIcon from '@material-ui/icons/SportsRugby'
import GitHubIcon from '@material-ui/icons/GitHub';

function Certificate() {
  const match = useRouteMatch("/certificados")
  const history = useHistory()
  const countCertificates = window.innerWidth < 400 ? 3 : 11

  const goTo = (type) => {
    history.push(type)
  }

  const cards = [
    { icon: <CodeIcon />, title: 'HTML5 e CSS3 parte 1: A primeira página da Web', href:'https://cursos.alura.com.br/certificate/0955c2f7-0a95-4d6d-9a50-2b3eb7a3c5f7' },
    { icon: <CodeIcon />, title: 'HTML5 e CSS3 parte 2: Posicionamento, listas e navegação', href:'https://cursos.alura.com.br/certificate/7857c802-44fe-4e7b-bbbb-6307b0a15e83' },
    { icon: <CodeIcon />, title: 'HTML5 e CSS3 parte 3: Trabalhando com formulários e tabelas', href:'https://cursos.alura.com.br/certificate/df210f54-4b9f-425e-9204-52b3e95d9be9' },
    { icon: <CodeIcon />, title: 'HTML5 e CSS3 parte 4: Avançando no CSS', href:'https://cursos.alura.com.br/certificate/35db4f2a-b962-4c6c-8c1c-156e63ad21b4' },
    { icon: <WebAssetIcon />, title: 'Bootstrap: criação de uma single-page responsiva', href:'https://cursos.alura.com.br/certificate/7ce08a2d-3abe-497b-b8da-238a2c6a9ce2' },
    { icon: <WebIcon />, title: 'CSS Grid: Simplificando layouts', href:'https://cursos.alura.com.br/certificate/d97c199c-480d-4638-9bb5-0d47590ba905' },
    { icon: <WebIcon />, title: 'Flexbox: Posicione elementos na tela', href:'https://cursos.alura.com.br/certificate/c1d7f58d-fe88-47ea-9d6d-4d75913695ac'},
    { icon: <WebAssetIcon />, title: 'HTTP: Entendendo a web por baixo dos panos', href:'https://cursos.alura.com.br/certificate/0955c2f7-0a95-4d6d-9a50-2b3eb7a3c5f7' },
    { icon: <CodeIcon />, title: 'Lógica de programação I: Os primeiros programas com Javascript e HTML', href:'https://cursos.alura.com.br/certificate/39c5a0ec-3b8f-4aa7-bf12-c34e5bc514f8' },
    { icon: <CodeIcon />, title: 'Lógica de programação II: pratique com desenhos, animações e um jogo', href:'https://cursos.alura.com.br/certificate/ec20f81e-4f38-4362-a7c5-22854154b4e5' },
    { icon: <WebAssetIcon />, title: 'Sass e Compass: Descomplicando o CSS', href:'https://cursos.alura.com.br/certificate/0b85b4c4-22c7-4216-899d-dd2d69742248' },
    { icon: <WebIcon />, title: 'Web Design Responsivo: Páginas que se adaptam do mobile ao desk', href:'https://cursos.alura.com.br/certificate/3fcf325a-3e27-4580-8758-b1a957afa11a' },
    { icon: <GroupIcon />, title: 'Estratégia em Mídias Sociais: Do básico ao avançado', href:'https://cursos.alura.com.br/certificate/fa3efe5a-be12-4f62-ad5a-46d7f39ebb07' },
    { icon: <GroupIcon />, title: 'UX: o que é experiência de usuário', href:'https://cursos.alura.com.br/certificate/fd14b054-59fc-4d1a-ba2b-5e4320b01be3' },
    { icon: <MobileFriendlyIcon />, title: 'UI Design Patterns: Usabilidade em interfaces mobile', href:'https://cursos.alura.com.br/certificate/88f79b99-f808-4e05-9cff-acd19d86fa2d' },
    { icon: <SportsRugbyIcon />, title: 'SCRUM: Agilidade em seu projeto', href:'https://cursos.alura.com.br/certificate/d113acaa-49f9-424e-a2c0-47f9f8128b82' },
    { icon: <GitHubIcon />, title: 'Introdução ao Git e Controle de Versões', href:'https://certificates.digitalinnovation.one/3AFB83E9' },
    { icon: <GitHubIcon />, title: 'Introdução ao GitHub e Comandos para Trabalhar em Equipe', href:'https://certificates.digitalinnovation.one/5F8A30D9' },
    { icon: <CodeIcon />, title: 'Lógica de Programação Essencial', href:'https://certificates.digitalinnovation.one/D53C7BEC' },
    { icon: <CodeIcon />, title: `JavaScript: Primeiros passos com a linguagem`, href:'https://cursos.alura.com.br/certificate/367f772f-0668-49d2-aa40-d8ca39b51593' }
  ]

  return (
    <section id="certificados" className='certificate'>
      <h1>Certificados</h1>
      <hr className='detalhe'/>
      <div>
        {cards.map((item, index) => {
          if (index > countCertificates && !match) {
            return <Fragment key={item.title} />
          }
          return <Card key={item.title} identificador={item} />
        })}
      </div>
      {!match && <div>
        <button className='button' onClick={() => goTo('/certificados')}>Veja mais</button>
      </div>}
      {match && <div>
        <button className='button' onClick={() => goTo('/')}>Voltar</button>
      </div>}
    </section>
  )
}

export default Certificate;
