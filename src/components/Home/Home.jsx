import React from 'react'
import Hero from '../Hero/Hero'
import { Link, NavLink } from 'react-router-dom'
import '../../styles/main.scss'

export const Home = () => {
  return (
    <main className='main-container'>

        <Hero images={["/heroBackground1.png", "/heroBackground2.png", "/heroBackground3.png"]} titulo='Bienvenidos' texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'>
        <div className="button-container">
          <Link to="/acerca"><button className='btn btn-primary'>ACERCA DE</button></Link>
          <Link to="/trabajos"><button className='btn btn-primary'>MIS TRABAJOS</button></Link>
        </div>
        </Hero>

    </main>
  )
}
