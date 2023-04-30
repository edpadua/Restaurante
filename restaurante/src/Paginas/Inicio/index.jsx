import React from 'react'

import styles from './Inicio.module.css'

import { massas } from '../../../data/massas'

import Menu from '../../Componentes/Menu'

import Banner from '../../Componentes/Banner'

import Sobre from '../../Componentes/Sobre'
import Contato from '../../Componentes/Contato'

function Inicio() {



    return (
        <>
            <Banner />

            <section id="sobre" className={styles.secao_sobre}>
                <div className="container">
                    <Sobre />
                </div>
            </section>
            <section id="menu" className={styles.secao_menu}>
                <div className="container">
                    <Menu />
                </div>
            </section>
            <section id="contato" className={styles.secao_contato}>
                <div className="container">
                    <Contato />
                </div>
            </section>

        </>
    )
}

export default Inicio
