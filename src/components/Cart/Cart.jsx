import React, {useContext} from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import {Link} from 'react-router-dom'
import { CartItem } from './CartItem/CartItem';
import './Cart.scss'

export const Cart = () => {

  const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

  return (

    <div className="cart">

      <button className="close"></button>

      <div className='cart-title'>
        <h2 className='font-base-regular'>Mi Carrito<img src="" alt="" /></h2>
      </div>
      <div className='cart-body'>

        <div className="cart-list">
          <ul>
            <CartItem></CartItem>
          </ul>
        </div>

        <div className="cart-details">
          <h3 className='font-base-regular'>Resumen de la Compra</h3>
          <ul className='font-base-light'>
            <li>
              <p>Productos</p><p>+$40.000</p>
            </li>
            <li>
              <p>Productos</p><p>+$40.000</p>
            </li>
            <li>
              <p>Productos</p><p>+$40.000</p>
            </li>
          </ul>
          <p className='total-price font-upper'>PRECIO TOTAL:  <span> $50000</span></p>
          <button className="btn btn-accent-blue">FINALIZAR COMPRA</button>
        </div>

      </div>
      <div className='cart-footer'>
        <button className="btn btn-primary-filled">VACIAR CARRITO</button>
        <button className="btn btn-primary">SALIR</button>
      </div>

    </div>

  )

  // if (cantidadTotal === 0){
  //   return (
  //       <>
  //           <h3>No hay productos seleccionados.</h3>
  //           <Link to="/trabajos">Mis Trabajos</Link>
  //       </>
  //   )
  // }

  // return (
  //   <div>Cart
  //       {
  //           carrito.map(producto => <CartItem key={producto.id} {...producto}></CartItem>)
  //       }
  //       <h3> Total: ${total}</h3>
  //       <h3> Cantidad Total: {cantidadTotaltotal}</h3>
  //       <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
  //       <Link to="/checkout">Finalizar Compra</Link>
  //   </div>
  // )
}
