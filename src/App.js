import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Main from './main/Main'
import Certificate from './certificate/Certificate'
import Footer from './footer/Footer'

function App() {
  return (
    <>
      <Switch>
        <Route path='/' component={Main} exact />
        <Route path='/certificados' component={Certificate} />
        <Route path='*' component={Main} />
      </Switch>
      <Footer/>
    </>
  )
}

export default App;
