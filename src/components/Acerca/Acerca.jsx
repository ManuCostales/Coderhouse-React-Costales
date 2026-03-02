import React from 'react'
import Hero from '../Hero/Hero'
import { Link, NavLink } from 'react-router-dom'
import '../../styles/main.scss'
import downArrow from '../../assets/downArrow.svg'

export const Acerca = () => {
  return (
    <main className='main-container'>

        <Hero images={["/about-1.jpg", "/about-2.jpg", "/about-3.jpg"]} titulo='Acerca de Mi' texto='Desde muy chico descubrí que la madera tenía algo especial: su aroma, su textura y la forma en que puede transformarse con paciencia y dedicación. Hoy convierto esa pasión en cada mueble, estante o pieza decorativa que sale de mi taller. Trabajo de manera artesanal, cuidando cada detalle desde el diseño inicial hasta el acabado final, buscando que cada creación no solo sea funcional, sino que también aporte calidez y personalidad a tu hogar. Me gusta combinar líneas simples con materiales nobles, respetando las vetas y la esencia natural de cada tabla, porque creo que cada pieza tiene su propio carácter y merece ser trabajada con tiempo y atención.'>
        <button className='scroll-down'><img src={downArrow}></img></button>
        </Hero>

    </main>
  )
}
