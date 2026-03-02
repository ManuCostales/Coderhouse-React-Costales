import React, {useContext, useState, useEffect} from 'react'
import { CarritoContext } from '../../../context/CarritoContext'
import ItemCount from '../../ItemDetailContainer/ItemDetail/ItemCount/ItemCount';

import './CartItem.scss'

import { alertConfirm, alertError, alertSuccess } from '../../../utils/alertas'
import { Link } from 'react-router-dom';

export const CartItem = ({item, cantidad}) => {

  const {removeCarrito} = useContext(CarritoContext);
  const {updateCarrito} = useContext(CarritoContext);

  const handleChange = (newQuantity) => {

    try {
      updateCarrito(item.id, newQuantity);
      alertSuccess("Carrito Actualizado!");
    }
    catch (error){
      alertError(error.message);
    }
    
  }

  return (
    <li className="cart-item">
        <img className="item-image" src={item.image}></img>
        <div className="cart-item-main">
          <Link to={`/trabajos/${item.category}/${item.id}`}><h4 className='font-base-regular'>{item.name}</h4></Link>
          <ItemCount itemPrice={item.price} itemStock={item.stock} quantity={cantidad} onChange={handleChange}></ItemCount>
        </div>
        
        <button className="remove-item" onClick={() => {
          removeCarrito(item.id)
          alertSuccess("Producto Eliminado!");
        }}></button>
    </li>
  )
}
