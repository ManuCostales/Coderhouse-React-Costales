import React from 'react'
import './ItemCard.scss'
import { Link } from 'react-router-dom'

export const ItemCard = ({id, name, descr, price, image, url, onClick}) => {
  return (
    <li className='item-card' key={id} onClick={() => onClick(id)}>

        <a className='item-card-link' href={url}></a>

        <div class='item-card-top' style={{backgroundImage: `url(${image})`}}></div>

        <div class='item-card-bottom'>

            <div className='item-card-text'>
                <h3 className="font-base-regular">{name}</h3>
                <p className="font-base-light">{descr}</p>
            </div>

            <div className="item-card-footer">
                <button className='item-card-button btn btn-accent-blue'><Link to={`detail/${id}`}>VER MÁS</Link></button>
                <p className="font-base-regular">${price}</p>
            </div>

        </div>
        
    </li>
  )
}

export default ItemCard
