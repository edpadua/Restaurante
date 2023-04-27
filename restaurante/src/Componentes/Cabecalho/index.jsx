import React from 'react'
import styles from './Cabecalho.module.css';
import { Link } from 'react-router-dom'
import { GiCook } from 'react-icons/gi';

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
        <nav className={styles.navbar}>
                <div className={styles.navbar_container}>
                   <Link to="/"><GiCook style={{ fontSize: '50px'}}/></Link>
                </div>

            </nav>
    </header>
  )
}

export default Cabecalho
