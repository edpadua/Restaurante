import React from 'react'

import { useState } from 'react'

import styles from './Inicio.module.css'

import { data } from '../../../data'

import Menu from '../../Componentes/Menu'

function Inicio() {

  const [pratos] = useState(data)

  return (
    <div>
      <Menu pratos={pratos}/>
    </div>
  )
}

export default Inicio
