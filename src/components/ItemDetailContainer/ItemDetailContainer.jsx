import React, {useState, useEffect} from 'react'
import {exportSingleItem} from '../MockAsync/MockAsync'
import { ClipLoader } from "react-spinners";
import {ItemDetail} from "./ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.scss'

export const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const {id} = useParams();
  console.log(id);

  useEffect(() => {

    exportSingleItem(id)
        .then((data) => {
            console.log(data);
            setItem(data);
        })
        .catch(error => {
            console.log(error);
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        })

  }, [id])

  let content = '';

  if (loading){
    content = <ClipLoader color="#FFF" size={50}></ClipLoader>
  }
  else if (error !== false){
    content = <p>{error}</p>
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