import React from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Registro from './components/Registro'

const App = () => {
  return (
    <div>
      <Header />
      <Menu platoDia={'Sopa de tortilla'}/>
      <Registro />
    </div>
  )
}

export default App
