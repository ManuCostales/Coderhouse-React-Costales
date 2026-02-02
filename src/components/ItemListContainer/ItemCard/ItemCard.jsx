import React from 'react'
import './ItemCard.scss'
import { Link } from 'react-router-dom'

export const ItemCard = ({id, category, name, descr, price, image, url, onClick}) => {
  return (
    <li className='item-card' key={id} onClick={() => onClick(id)}>

      <Link
              to={url}
              className="item-card-link"
            >

              <div
                className="item-card-top"
                style={{ backgroundImage: `url(${image})` }}
              />

              <div className="item-card-bottom">
                <div className="item-card-text">
                  <h3 className="font-base-regular">{name}</h3>
                  <p className="font-base-light">{descr}</p>
                </div>

                <div className="item-card-footer">
                  <span className="item-card-button btn btn-accent-blue">
                    VER MÁS
                  </span>
                  <p className="font-base-regular">${price}</p>
                </div>
              </div>

            </Link>
        
    </li>
  )
}

export default ItemCard
