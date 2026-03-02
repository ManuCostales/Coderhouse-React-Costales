import React, {useState, useEffect} from 'react'
import { ClipLoader } from "react-spinners";
import {ItemDetail} from "./ItemDetail/ItemDetail";
import { useParams, Link } from 'react-router-dom';
import './ItemDetailContainer.scss'

import { getSingleProduct } from '../../services/config';

//firebase

export const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {id} = useParams();

  useEffect (() => {

    setLoading(true);
    setError(null);
    setItem(null);

    getSingleProduct(id)
      .then((data) => {
        setItem(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      })


  }, [id])

  let content = '';

  if (loading){
    content = <ClipLoader color="#FFF" size={50}></ClipLoader>
  }
  else if (error){
    content = <div style={{
      display: 'flex',
      flexFlow: 'column',
      gap: '20px'
    }}><p className='font-base-regular' style={{
      fontSize: '1.4rem'
    }}>{error}</p>
    <div style={{
      display: 'flex',
      flexFlow: 'row',
      gap: '20px'
    }}>
    <Link to="/"><button className='btn btn-primary'>HOMEPAGE</button></Link>
    <Link to="/trabajos"><button className='btn btn-primary-filled'>MIS TRABAJOS</button></Link>
    </div>
    </div>
  }
  else if (!item){
    content = <p>Producto no encontrado</p>
  }
  else {
    content = <ItemDetail item={item}></ItemDetail>
  }

  return (
    <div className='item-detail-container'>
    {content}
    </div>
  )


}

export default ItemDetailContainer;