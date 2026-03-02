import React from 'react'
import Hero from '../Hero/Hero'
import { Link, NavLink } from 'react-router-dom'
import '../../styles/main.scss'

export const Home = () => {
  return (
    <main className='main-container'>

        <Hero images={["/heroBackground1.png", "/heroBackground2.png", "/heroBackground3.png"]} titulo='Bienvenidos' texto='En nuestro taller la madera cobra vida. Cada mueble, estante o pieza decorativa nace del cuidado por el detalle y del respeto por los materiales nobles. Trabajamos combinando técnicas tradicionales de carpintería con diseños actuales, creando productos funcionales que también aportan calidez y personalidad a cada espacio. Creemos que un buen mueble no solo ocupa un lugar en tu hogar, sino que forma parte de tu historia cotidiana.'>
        <div className="button-container">
          <Link to="/acerca"><button className='btn btn-primary'>ACERCA DE</button></Link>
          <Link to="/trabajos"><button className='btn btn-primary'>MIS TRABAJOS</button></Link>
        </div>
        </Hero>

    </main>
  )
}
