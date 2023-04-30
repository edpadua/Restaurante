import React from 'react'

import styles from './Contato.module.css';

function Contato() {
    return (
        <div>
            <div className="categoria_titulo">
                <h2>Contato</h2>
            </div>
            <div className={styles.contato}>
              
              <div className={styles.contato_info}>
                 
              </div>
              <div className={styles.contato_imagem}>
                   <img src="/Images/Restaurante.jpg"></img>
              </div>
          </div>
        </div>
    )
}

export default Contato
