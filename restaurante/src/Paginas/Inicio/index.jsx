import React from 'react'

import styles from './Inicio.module.css'

import { massas } from '../../../data/massas'

import Menu from '../../Componentes/Menu'

import Banner from '../../Componentes/Banner'

function Inicio() {



    return (
        <>
            <Banner />
            <div className="container espaco">
                <Menu />
            </div>

        </>
    )
}

export default Inicio
