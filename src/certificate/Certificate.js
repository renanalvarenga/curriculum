import React from 'react'
import Card from './components/card/Card'
import './certificate.css'

function Certificate() {

  const cards = [
    { icon: 'icone', title: 'HTML5 e CSS3 parte 1: A primeira página da Web' },
    { icon: 'icone', title: 'HTML5 e CSS3 parte 2: Posicionamento, listas e navegação' },
    { icon: 'icone', title: 'HTML5 e CSS3 parte 3: Trabalhando com formulários e tabelas' },
    { icon: 'icone', title: 'HTML5 e CSS3 parte 4: Avançando no CSS' },
    { icon: 'icone', title: 'Bootstrap: criação de uma single-page responsiva' },
    { icon: 'icone', title: 'CSS Grid: Simplificando layouts' },
    { icon: 'icone', title: 'Flexbox: Posicione elementos na tela' },
    { icon: 'icone', title: 'HTTP: Entendendo a web por baixo dos panos' },
    { icon: 'icone', title: 'Lógica de programação I: Os primeiros programas com Javascript e HTML' },
    { icon: 'icone', title: 'Lógica de programação II: pratique com desenhos, animações e um jogo' },
    { icon: 'icone', title: 'Sass e Compass: Descomplicando o CSS' },
    { icon: 'icone', title: 'Web Design Responsivo: Páginas que se adaptam do mobile ao desk' },
    //{ icon: 'icone', title: 'Estratégia em Mídias Sociais: Do básico ao avançado' },
    //{ icon: 'icone', title: 'UX: o que é experiência de usuário' },
    //{ icon: 'icone', title: 'UI Design Patterns: Usabilidade em interfaces mobile' },
  ]

  return (
    <section id="certificados" className='certificate'>
      <h1>Certificados</h1>
      <hr className='detalhe'></hr>
      <div>
        {cards.map(item => <Card key={item.title} identificador={item} />)}
      </div>
    </section>
  )
}

export default Certificate;
