import React from 'react'

import styles from './Inicio.module.css'

import { massas } from '../../../data/massas'

import Menu from '../../Componentes/Menu'

import Banner from '../../Componentes/Banner'

import Sobre from '../../Componentes/Sobre'

function Inicio() {



    return (
        <>
            <Banner />

            <section className={styles.secao_sobre}>
                <div className="container">
                    <Sobre />
                </div>
            </section>
            <div className="container">
                <Menu />
            </div>

        </>
    )
}

export default Inicio
