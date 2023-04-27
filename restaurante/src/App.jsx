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
      <div>
        <Cabecalho/>
        <Outlet />
        <Rodape/>
      </div>

    </>
  )
}

export default App
