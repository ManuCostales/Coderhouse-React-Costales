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

        <Hero images={["/works-1.jpg", "/works-2.jpg", "/works-3.jpg"]} titulo='Mis Trabajos' texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'>
        <button onClick={scrollTo} className='scroll-down'><img src={downArrow}></img></button>
        </Hero>
        
        <ItemListContainer ref={listRef} mensaje="Lista de Trabajos"></ItemListContainer>
        
    </main>
  )
}
