import React, { useEffect, useRef, useState } from 'react'
import './ItemDetail.scss'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { ItemDetailCarousel } from './ItemDetailCarousel/ItemDetailCarousel'
import { useParams } from 'react-router-dom'

import { CarritoContext } from '../../../context/CarritoContext'
import { useContext } from 'react'
import ItemCount from './ItemCount/ItemCount'

import imgHeight from "../../../assets/height.svg"
import imgWidth from "../../../assets/width.svg"
import imgWeight from "../../../assets/weight.svg"
import imgWood from "../../../assets/wood.svg"
import imgClose from "../../../assets/close.svg"
import imgBuy from "../../../assets/buy.svg"
import imgCart from "../../../assets/cart-filled.svg"
import imgCartDark from "../../../assets/cartdark.svg"
import { Link } from 'react-router-dom'

export const ItemDetail = ({item}) => {

  const {idCategory} = useParams();

  const [quantity, setQuantity] = useState(1);
  const {addCarrito} = useContext(CarritoContext);

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

  //Manejar Cantidad:

  const handleCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        console.log();

        const item = {id, nombre, precio};
        agregarAlCarrito(item, cantidad);
  }

  return (
    <div className="item-detail">

        {/* <div className='overlay'></div> */}

        {/* <button className='btn-close color-light'><img src={imgClose}></img></button> */}
        <Link to={`/trabajos/${idCategory}`}><button className='btn-close color-light font-base-regular'>Volver...</button></Link>

        <div className="item-detail-top">
            <ItemDetailCarousel imagenes={item.images}></ItemDetailCarousel>
        </div>
        <div className="item-detail-bottom">

            <h2 className='color-light font-base-regular'>{item.name}</h2>

            <div className="details">

                <div className="details-left">
                    <ul className='additionals'>
                        <li className="additional font-upper color-light"><img src={imgHeight}></img>ALTO: {item.height}m</li>
                        <li className="additional font-upper color-light"><img src={imgWidth}></img>ANCHO: {item.width}m</li>
                        <li className="additional font-upper color-light"><img src={imgWeight}></img>PESO: {item.weight}kg</li>
                        <li className="additional font-upper color-light"><img src={imgWood}></img>MADERA: {item.woods}</li>
                    </ul>
                </div>

                <div className='border'></div>

                <div className='details-right'>

                    <div className="details-descr font-base-light">{item.descr}</div>

                    <div className="details-footer">

                        <ItemCount itemPrice={item.price} itemStock={item.stock} idCategory={idCategory} quantity={quantity} setQuantity={setQuantity}></ItemCount>

                        <div className="details-buttons">
                            <button
                            className={`btn btn-accent-blue`}
                            >
                            COMPRAR AHORA <img src={imgBuy}></img>
                            </button>
                            <button
                            onMouseEnter={mouseEnters}
                            onMouseLeave={mouseLeaves}

                            

                            onClick={() => {
                              addCarrito(item, quantity);
                              console.log(quantity);
                              }
                            }

                            ref={buttonRef}
                            className={`btn btn-primary-filled`}
                            >
                            AÑADIR AL CARRITO <img src={imgCartDark}></img>
                            </button>
                            <Link to={`/trabajos/${idCategory}`}>
                            <button className="btn btn-primary">SALIR</button>
                            </Link>
                        </div>

                        {/* <div className="details-price color-light"><p className='font-upper'>PRECIO FINAL:</p><h6 className='font-base-regular'>${item.price}</h6></div>

                        <div className="details-buttons">
                            <button className='btn btn-accent-blue'>AÑADIR AL CARRITO <img src={imgCart}></img></button>
                            <Link to={`/trabajos/${idCategory}`}><button className='btn btn-primary'>SALIR</button></Link>
                        </div> */}

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}