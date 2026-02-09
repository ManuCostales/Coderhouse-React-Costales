import React from 'react'
import {Link} from 'react-router-dom'
import './NotFound404.scss'
import imgError from "../../assets/error.svg"

export const NotFound404 = () => {
  return (
    <div className="not-found-container">
      <img src={imgError}></img>
      <h1 className='font-upper-spacing'>ERROR 404</h1>
      <h2 className='font-base-regular'>No se ha encontrado la página.</h2>
      <div className="not-found-botones">
        <Link to="/"><button className='btn btn-primary'>HOMEPAGE</button></Link>
        <Link to="/trabajos"><button className='btn bg-color-accent-blue'>MIS TRABAJOS</button></Link>
      </div>
    </div>
  )
}
