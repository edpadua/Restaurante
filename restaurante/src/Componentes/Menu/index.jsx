import React from 'react'

import styles from './Menu.module.css';

import Prato from '../Prato';

function Menu({pratos}) {
  return (
    <div>
         {pratos.map((prato) => (
					<div key={prato.id}>
						 <Prato prato={prato}/>
                    </div>
				))}
    </div>
  )
}

export default Menu
