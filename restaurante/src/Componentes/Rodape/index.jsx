import React from 'react'
import styles from './Rodape.module.css';

import { GiCook } from 'react-icons/gi';

import { Link } from 'react-router-dom';


function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.logo_rodape}>
        <Link to="/"><GiCook style={{ fontSize: '60px', color: '#ffffff' }} /></Link>
        <p className={styles.texto_todape}>Ristoranti</p>
      </div>
    </footer>
  )
}

export default Rodape
