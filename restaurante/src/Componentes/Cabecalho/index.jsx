import React from 'react'
import styles from './Cabecalho.module.css';
import { Link } from 'react-router-dom'
import { GiCook } from 'react-icons/gi';

import { HashLink } from 'react-router-hash-link';

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <Link to="/"><GiCook style={{ fontSize: '50px' }} /></Link>
          <div className={styles.navegation_menu}>
          <ul>
            <li className={styles.item_menu}>
              <Link smooth to="/">Início</Link>
            </li>
            <li className={styles.item_menu}>
              <HashLink smooth to="/#sobre">Sobre</HashLink>
            </li>
            <li className={styles.item_menu}>
              <HashLink smooth to="/#menu">Menu</HashLink>
            </li>
            <li className={styles.item_menu}>
              <HashLink smooth to="/#contato">Contato</HashLink>
            </li>
          </ul>
        </div>
        </div>
        




      </nav>
    </header>
  )
}

export default Cabecalho
