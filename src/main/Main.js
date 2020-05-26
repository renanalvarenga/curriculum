import React from 'react'
import Header from '../header/Header'
import Introduction from '../introduction/Introduction'
import Experience from '../experience/Experience'
import Skills from '../skills/Skills'
import Hobbies from '../hobbies/Hobbies'
import Certificate from '../certificate/Certificate'

function Main() {
  return (
    <>
      <Header/>
      <Introduction/>
      <Certificate/>
      <Experience/>
      <Skills/>
      <Hobbies/>
    </>
  )
}

export default Main;
