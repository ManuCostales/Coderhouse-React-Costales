import React, { Children } from 'react'
import Carousel from './Carousel/Carousel';
import './Hero.scss'

export const Hero = ({ images = [], titulo = "Titulo", texto = "texto", children}) => {
  return (
    <section className="hero">
        <Carousel images={images}></Carousel>
        <div className="text-container">
          <h1 className="font-base-regular">{titulo}</h1>
          <p className="title-overlay font-cursive-2">{titulo}</p>
          <p className="text">{texto}</p>
          {children}
        </div>

    </section>
  )
}

export default Hero;