import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecalho from './Componentes/Cabecalho'
import Rodape from './Componentes/Rodape'

function App() {


  return (
    <>
      
        <Cabecalho />
          <Outlet />
        <Rodape />
      

    </>
  )
}

export default App
