import React from 'react'

import styles from './Sobre.module.css';

function Sobre() {
  return (
    <>
          <div className="categoria_titulo">
                <h2>Sobre</h2>
          </div>

          <div className={styles.sobre}>
              <div className={styles.sobre_imagem}>
                   <img src="/Images/Restaurante.jpg"></img>
              </div>
              <div className={styles.sobre_texto}>
                  <p>
                     Sed consectetur tempor neque, et tempor mi tempor vel. Vestibulum ac nibh vitae arcu aliquam dignissim at eget ante. Vivamus urna neque, suscipit a sollicitudin ut, vestibulum in neque. Donec gravida lorem in ante egestas interdum. Vivamus sit amet sapien imperdiet, ultrices lorem non, volutpat quam. Proin in sem orci. Duis at risus ultrices, finibus nulla sit amet, posuere lacus. Donec sed augue malesuada, molestie neque sed, pellentesque ante.
                  </p>
              </div>
          </div>
    </>
  )
}

export default Sobre
