import React from 'react'
import Interests from './components/interests/Interests'
import Languages from './components/languages/Languages'

import './hobbies.css'

function Hobbies() {
  return (
    <section id="hobbies" className='hobbies'>
      <h1>Idiomas e Interesses</h1>
      <hr className='detalhe'/>
     <div>
        <Languages />
        <article />
        <Interests />
     </div>
    </section>
  )
}

export default Hobbies;
