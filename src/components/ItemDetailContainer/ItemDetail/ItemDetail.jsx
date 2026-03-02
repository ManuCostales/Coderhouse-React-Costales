import React, { useEffect, useRef, useState } from 'react'
import './ItemDetail.scss'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { ItemDetailCarousel } from './ItemDetailCarousel/ItemDetailCarousel'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { CarritoContext } from '../../../context/CarritoContext'
import { useContext } from 'react'
import ItemCount from './ItemCount/ItemCount'

import { alertError, alertSuccess, alertNotif } from '../../../utils/alertas'

import imgHeight from "../../../assets/height.svg"
import imgWidth from "../../../assets/width.svg"
import imgWeight from "../../../assets/weight.svg"
import imgWood from "../../../assets/wood.svg"
import imgClose from "../../../assets/close.svg"
import imgBuy from "../../../assets/buy.svg"
import imgCart from "../../../assets/cart-filled.svg"
import imgCartDark from "../../../assets/cartdark.svg"

export const ItemDetail = ({item}) => {

  const {idCategory} = useParams();

  const navigation = useNavigate();

  const {addCarrito, findQuantity, isInCart, updateCarrito} = useContext(CarritoContext);
  const initialQuantity = findQuantity(item.id);
  const [quantity, setQuantity] = useState(initialQuantity);

  //Para boton carrito:

  const buttonRef = useRef(null);

  const mouseEnters = () => {
    const img = buttonRef.current.querySelector("img");
    if (img) {
      img.src = imgCart;
    }
  };

  const mouseLeaves = () => {
    const img = buttonRef.current.querySelector("img");
    if (img) {
      img.src = imgCartDark;
    }
  };

  const handleAñadirCarrito = () => {

    const exists = isInCart(item.id);

    if (exists) {

      try {
        updateCarrito(item.id, quantity);
        alertSuccess("Carrito Actualizado!");
        return true;
      }
      catch (error){
        alertError(error.message);
        return false;
      }

    }
    else {

      try {
        addCarrito(item, quantity);
        alertSuccess("Producto Agregado!");
        return true;
      }
      catch (error) {
        alertError(error.message);
        return false;
      }

    }

  }

  const handleComprar = () => {

    const hasBeenAdded = handleAñadirCarrito();
    if (hasBeenAdded){
      alertNotif("Dirigiendo hacia el Carrito!");

      setTimeout(() => {
        navigation("/cart");
      }, 2000);
    }  

  }

  //Manejar Cantidad:

  const handleCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        const item = {id, nombre, precio};
        agregarAlCarrito(item, cantidad);
  }

  return (
    <div className="item-detail">
      <Link to={`/trabajos/${idCategory}`}>
        <button onClick={() => navigation(-1)} className="btn-close color-light font-base-regular">
          Volver...
        </button>
      </Link>

      <div className="item-detail-top">
        <ItemDetailCarousel imagenes={item.images}></ItemDetailCarousel>
      </div>
      <div className="item-detail-bottom">
        <h2 className="color-light font-base-regular">{item.name}</h2>

        <div className="details">
          <div className="details-left">
            <ul className="additionals">
              <li className="additional font-upper color-light">
                <img src={imgHeight}></img>ALTO: {item.height}m
              </li>
              <li className="additional font-upper color-light">
                <img src={imgWidth}></img>ANCHO: {item.width}m
              </li>
              <li className="additional font-upper color-light">
                <img src={imgWeight}></img>PESO: {item.weight}kg
              </li>
              <li className="additional font-upper color-light">
                <img src={imgWood}></img>MADERA: {item.woods.join(", ")}
              </li>
            </ul>
          </div>

          <div className="border"></div>

          <div className="details-right">
            <div className="details-descr font-base-light">{item.descr}</div>

            <div className="details-footer">
              <ItemCount
                itemPrice={item.price}
                itemStock={item.stock}
                quantity={quantity}
                onChange={setQuantity}
              ></ItemCount>

              <div className="details-buttons">
                <button className={`btn btn-accent-blue`} onClick={() => handleComprar()}>
                  COMPRAR AHORA <img src={imgBuy}></img>
                </button>
                <button
                  onMouseEnter={mouseEnters}
                  onMouseLeave={mouseLeaves}
                  onClick={() => handleAñadirCarrito()}
                  ref={buttonRef}
                  className={`btn btn-primary-filled`}
                >
                  AÑADIR AL CARRITO <img src={imgCartDark}></img>
                </button>
                <Link onClick={() => navigation(-1)}>
                  <button className="btn btn-primary">SALIR</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}