import React from 'react'

import styles from './Banner.module.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { HashLink } from 'react-router-hash-link';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
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

function Banner() {
    return (
        <div>
            <Carousel responsive={responsive}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                showDots={true}
                
            >

                <div className={styles.banner} style={{ backgroundImage: `url("/Images/Ravioli3.jpg")`}}>
                    <div className={styles.banner_title}>
                        <h2>Melhores Pratos</h2>
                        <HashLink smooth to="/#menu"><button>Saiba Mais</button></HashLink>
                    </div>
                    
                    

                </div>
                <div className={styles.banner} style={{ backgroundImage: `url("/Images/Espaguete3.jpg")`}}>
                    <div className={styles.banner_title}>
                        <h2>O Restaurante</h2>
                        <HashLink smooth to="/#sobre"><button>Saiba Mais</button></HashLink>
                    </div>
                    
                </div>
                <div className={styles.banner} style={{ backgroundImage: `url("/Images/Penne3.jpg")`}}>
                    <div className={styles.banner_title}>
                        <h2>Reserve o Seu Lugar</h2>
                        <HashLink smooth to="/#contato"><button>Saiba Mais</button></HashLink>
                    </div>
                    
                </div>
            </Carousel>

        </div>
    )
}

export default Banner
