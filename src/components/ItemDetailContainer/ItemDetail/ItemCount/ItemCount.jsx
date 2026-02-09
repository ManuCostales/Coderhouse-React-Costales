import React, {useRef, useEffect, useState} from 'react'
import imgBuy from "../../../../assets/buy.svg"
import {Link, useNavigate} from 'react-router-dom'
import './ItemCount.scss';



export const ItemCount = ({itemPrice, itemStock, idCategory, quantity, setQuantity}) => {

  const navigate = useNavigate();

  const [totalPrice, setTotalPrice] = useState(itemPrice);
  const [currentItemStock, setCurrentItemStock] = useState(itemStock - 1);
  
  const sumButtonRef = useRef(null);
  const resButtonRef = useRef(null);

  const handleSum = () => {
    if (currentItemStock <= 0){
        return;
    }
    setQuantity(prev => prev + 1);
    setTotalPrice(prev => prev + itemPrice);
    setCurrentItemStock(prev => prev - 1);
  }

  const handleRes = () => {
    if (quantity <= 1){
        return;
    }
    setQuantity(prev => prev - 1);
    setTotalPrice(prev => prev - itemPrice);
    setCurrentItemStock(prev => prev + 1);
  }


  return (
    <div className="item-count">
        <div className='price-unit'><p className="font-upper">PRECIO:</p>
        <h6 className="font-base-regular">${itemPrice.toLocaleString("es-AR")}</h6></div>
      <div className="quantity-container">
      <p className='font-upper'>CANTIDAD:</p>
        <div className="quantity">
                <button
                onClick={handleSum}
                className={`add ${currentItemStock === 0 ? "inactive" : "active"}`}
                ref={sumButtonRef}
            >
                +
            </button>
            <p className="font-base-regular">{quantity}</p>
            <button
                onClick={handleRes}
                className={`res ${quantity === 1 ? "inactive" : "active"}`}
                ref={resButtonRef}
            >
                -
            </button>
        </div>

        <p className="font-base-light color-light">
          (Disponibles:
          <span className="font-base-regular"> {currentItemStock}</span>
          )
        </p>
      </div>

      <div className="details-price color-light">
        <p className="font-upper">TOTAL:</p>
        <h6 className="font-base-regular">${totalPrice.toLocaleString("es-AR")}</h6>
      </div>

      
    </div>
  );
}

export default ItemCount;
