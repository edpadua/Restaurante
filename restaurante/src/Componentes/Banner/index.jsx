import React from 'react'

import styles from './Banner.module.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
       <Carousel responsive={responsive} >

          <div className={styles.banner}>
              <img src="/Images/Nhoque.jpg"></img>  
          </div>      
        </Carousel>

    </div>
  )
}

export default Banner
