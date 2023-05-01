import React from 'react'

import styles from './Menu.module.css';

import Prato from '../Prato';

import { useState } from 'react'

import { massas } from '../../../data/massas';

import { saladas } from '../../../data/saladas';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Menu() {

    const [massasData] = useState(massas)

    const [saladasData] = useState(saladas)

    return (
        <>
            <div className="categoria_titulo">
                <h2>Massas Artesanais</h2>
            </div>
            
            <Carousel responsive={responsive} infinite={true}>
                {massasData.map((prato) => (

                    <Prato key={prato.id} prato={prato} />

                ))}
            </Carousel>

            <div className="categoria_titulo">
                <h2>Saladas</h2>
            </div>

            <Carousel responsive={responsive} infinite={true}>
                {saladasData.map((prato) => (

                    <Prato key={prato.id} prato={prato} />

                ))}
            </Carousel>

        </>
    )
}

export default Menu
