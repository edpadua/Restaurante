import React from 'react'

import styles from './Contato.module.css';

import {FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEnvelope} from 'react-icons/fa';

function Contato() {
    return (
        <div>
            <div className="categoria_titulo">
                <h2>Contato</h2>
            </div>
            <div className={styles.contato}>
              
              <div className={styles.contato_info}>
                 <ul className={styles.lista_contato}>
                     <li className={styles.contato_item_lista}>
                        <FaMapMarkerAlt style={{ marginTop: '3px' }}/><p className={styles.contato_item_lista_texto}>Av. dos Espaguetes 1234</p>

                     </li>
                     <li className={styles.contato_item_lista}>
                        <FaPhone style={{ marginTop: '3px' }}/><p className={styles.contato_item_lista_texto}>+55 77777777</p>
                     </li>
                     <li className={styles.contato_item_lista}>
                        <FaWhatsapp style={{ marginTop: '3px' }}/><p className={styles.contato_item_lista_texto}>+55 8888888</p>
                     </li>
                     <li className={styles.contato_item_lista}>
                        <FaEnvelope style={{ marginTop: '3px' }}/><a className={styles.contato_item_lista_texto} href="mailto:email@email.com">email@email.com</a>
                     </li>
                 </ul>
              </div>
              <div className={styles.contato_imagem}>
                   <img src="/Images/Nhoque.jpg"></img>
              </div>
          </div>
        </div>
    )
}

export default Contato
