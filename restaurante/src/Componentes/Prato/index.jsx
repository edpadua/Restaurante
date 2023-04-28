import React from 'react'

import styles from './Prato.module.css';

function Prato({ prato }) {
    return (
        <div className={styles.prato}>
            <div className={styles.imagem}>
                <img src={prato.img} alt={prato.title}/>
               
            </div>
            <div className={styles.titulo}>
                <h2>{prato.title}</h2>
            </div>
            <div className={styles.descricao}>
                <p>{prato.description}</p>
            </div>
            <div className={styles.price}>
                <p>R$ {prato.price}</p>
            </div>
        </div>
    )
}

export default Prato
