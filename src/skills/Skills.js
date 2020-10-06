import React from 'react'

import styled from 'styled-components'
import fundoSkills from './fundoSkills.png'
import Skill from './components/skill/Skill'

function Skills() {
  return (
    <SkillsContent id="habilidades">
      <h1>Habilidades</h1>
      <hr/>
      <Skill title='HTML' size={80} />
      <Skill title='CSS' size={70} />
      <Skill title='JavaScript' size={50} />
      <Skill title='Design Responsivo' size={80} />
      <Skill title='React' size={60} />
      <Skill title='Angular' size={50} />
      <Skill title='UI/UX' size={80} />
      <Skill title='Acessibilidade' size={70} />
      <Skill title='Metodologias Ágeis' size={80} />
    </SkillsContent>
  )
}

export default Skills;

const SkillsContent = styled.section`
  background-image: linear-gradient(0deg, rgba(12, 11, 12, 0.7), rgba(12, 11, 12, 0.7)), url(${fundoSkills});
  background-attachment: fixed;
  padding: 25px 30%;
  list-style: none;
  color: white;
  
  h1 {
    padding: 0;
  }

  @media only screen 
  and (min-width: 320px) 
  and (max-width: 568px) {
    padding: 20px 50px 25px 50px;
  }
`
