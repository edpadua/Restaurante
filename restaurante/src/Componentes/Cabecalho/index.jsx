import React from 'react'
import styles from './Cabecalho.module.css';
import { Link } from 'react-router-dom'
import { GiCook, GiHamburgerMenu } from 'react-icons/gi';

import { HashLink } from 'react-router-hash-link';

import { useState } from 'react'

function Cabecalho() {

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <header className={styles.cabecalho}>
      <nav className={styles.navbar}>
      {showNavbar ? (<div className={styles.navegation_menu_mobile}>
            <ul>
              <li className={styles.item_menu_mobile}>
                <Link smooth to="/">Início</Link>
              </li>
              <li className={styles.item_menu_mobile}>
                <HashLink smooth to="/#sobre">Sobre</HashLink>
              </li>
              <li className={styles.item_menu_mobile}>
                <HashLink smooth to="/#menu">Menu</HashLink>
              </li>
              <li className={styles.item_menu_mobile}>
                <HashLink smooth to="/#contato">Contato</HashLink>
              </li>
            </ul>
          </div>):(<></>)}

        <div className={styles.navbar_container}>
          <Link to="/"><GiCook style={{ fontSize: '50px' }} /></Link>
          <div className={styles.menu_icon} onClick={handleShowNavbar}>
            <GiHamburgerMenu />
          </div>

         
          <div className={`${styles.navegation_menu}  ${showNavbar && 'active'}`}>
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
