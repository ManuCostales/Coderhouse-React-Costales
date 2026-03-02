import React from 'react'
import { Link } from 'react-router-dom';
import "./Summary.scss"

export const Summary = ({total, cantidadTotal, children}) => {
  return (

    <div className="cart-details">
        <h3 className='font-base-regular'>Resumen de la Compra</h3>
        <ul className='font-base-light'>
            <li>
            <p>{cantidadTotal} Productos</p><p>+${total.toLocaleString("es-AR")}</p>
            </li>
            <li>
            <p>Descuentos</p><p>$0</p>
            </li>
            <li>
            <p>Envio</p><p>$0</p>
            </li>
        </ul>
        <p className='total-price font-upper'>PRECIO TOTAL: <span className='font-base-regular'>${total.toLocaleString("es-AR")}</span></p>
        {children}
    </div>

  )
}

export default Summary;