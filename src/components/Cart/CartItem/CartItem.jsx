import React, {useContext} from 'react'
import { CarritoContext } from '../../../context/CarritoContext'
import ItemCount from '../../ItemDetailContainer/ItemDetail/ItemCount/ItemCount';

export const CartItem = ({item, cantidad}) => {

  const {eliminarProducto} = useContext(CarritoContext);

  return (
    <li className="cart-item">
        <img></img>
        <h4>{item.name}</h4>
        <ItemCount itemPrice={item.price} itemStock={item.stock}></ItemCount>
        <button>REMOVE</button>
    </li>
  )
}
