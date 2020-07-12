import React from 'react'

import styled from 'styled-components'

import Interests from './components/interests/Interests'
import Languages from './components/languages/Languages'

import './hobbies.css'

function Hobbies() {
  return (
    <HobbiesContent id="hobbies" className='hobbies'>
      <h1>Idiomas e Interesses</h1>
      <hr className='detalhe'/>
     <div>
        <Languages />
        <article />
        <Interests />
     </div>
    </HobbiesContent>
  )
}

export default Hobbies;

const HobbiesContent = styled.section`
`
