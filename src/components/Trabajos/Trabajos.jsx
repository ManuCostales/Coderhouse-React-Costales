import React, {useRef} from 'react'
import Hero from '../Hero/Hero'
import { Link, NavLink } from 'react-router-dom'
import '../../styles/main.scss'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import downArrow from '../../assets/downArrow.svg'

export const Trabajos = () => {

  const listRef = useRef(null);

  const scrollTo = () => {
    listRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main className='main-container'>

        <Hero images={["/works-1.jpg", "/works-2.jpg", "/works-3.jpg"]} titulo='Mis Trabajos' texto='Te invitamos a recorrer nuestra tienda y descubrir piezas únicas, hechas con pasión y dedicación. Si buscás algo especial o personalizado, estamos listos para transformar tu idea en realidad y crear algo pensado exclusivamente para vos y tu espacio.'>
        <button onClick={scrollTo} className='scroll-down'><img src={downArrow}></img></button>
        </Hero>
        
        <ItemListContainer ref={listRef} mensaje="Lista de Trabajos"></ItemListContainer>
        
    </main>
  )
}
