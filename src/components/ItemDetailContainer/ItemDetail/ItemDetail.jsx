import React from 'react'
import './ItemDetail.scss'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'


import imgCart from "../../../assets/cart.svg"
import imgHeight from "../../../assets/height.svg"
import imgWidth from "../../../assets/width.svg"
import imgWeight from "../../../assets/weight.svg"
import imgWood from "../../../assets/wood.svg"

export const ItemDetail = ({item}) => {

  return (
    <div className="item-detail">

        <div className='overlay'></div>

        <button className='btn-close color-light'><img src="./close"></img></button>

        <div className="item-detail-top"></div>
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

                        <div className="details-price color-light"><p className='font-upper'>PRECIO FINAL:</p><h6 className='font-base-regular'>${item.price}</h6></div>

                        <div className="details-buttons">
                            <button className='btn btn-accent-blue'>AÑADIR AL CARRITO <img src={imgCart}></img></button>
                            <button className='btn btn-primary'>SALIR</button>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}