import React from 'react'

import styles from './Prato.module.css';

function Prato({prato}) {
  return (
    <div className={styles.prato}>
        <div className={styles.imagem}>
             <h2>{prato.title}</h2>
        </div>
    </div>
  )
}

export default Prato
