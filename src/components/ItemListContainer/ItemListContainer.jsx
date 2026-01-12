
import React from "react";
import './ItemListContainer.scss';

const ItemListContainer = (props) => {

    return (

    <div class="container">

        <h2 className="font-base-light">{props.mensaje}</h2>
        <p>{props.mensaje2}</p>

    </div>

    )    

}

export default ItemListContainer;