import React, {useContext} from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import {Link, useNavigate} from 'react-router-dom'
import { CartItem } from './CartItem/CartItem';
import './Cart.scss'
import { alertConfirm, alertError, alertSuccess } from '../../utils/alertas'
import Summary from '../Summary/Summary';

export const Cart = () => {

  const {listaProductos, emptyCarrito, total, cantidadTotal} = useContext(CarritoContext);

  const navigate = useNavigate();

  const handleExit = () => {
    navigate(-1);
  }

    return (

      <div className="cart">
  
        <button onClick={handleExit} className="close"></button>
        <button onClick={handleExit} className="close-2"></button>
  
        <div className='cart-title'>
          <h2 className='font-base-regular'>Mi Carrito<img src="" alt="" /></h2>
        </div>
        <div className='cart-body'>
  
          <div className="cart-list">
            {listaProductos.length > 0 ? (
              <ul>
                {listaProductos.map( (prod) => {
                  return (<CartItem item={prod.item} cantidad={prod.cantidad}></CartItem>)
                })}
              
              </ul>
            ): (
              <div className="cart-empty">
                <h3 className='font-base-regular'>Tu carrito esta vacio. Agrega productos para verlos aqui.</h3>
                <Link to="/trabajos"><button className="btn btn-primary">VER PRODUCTOS</button></Link>
              </div>
            )}
            
          </div>

          <Summary total={total} cantidadTotal={cantidadTotal}>
            {cantidadTotal > 0 && <Link to="/checkout"><button className="btn btn-accent-blue">FINALIZAR COMPRA</button></Link>}
          </Summary>
  
        </div>
        <div className='cart-footer'>
          {listaProductos.length > 0 && <button className="btn btn-primary-filled" onClick={emptyCarrito}>VACIAR CARRITO</button>}
          <button onClick={handleExit} className="btn btn-primary">SALIR</button>
        </div>
  
      </div>
  
    )
}
