
import { useContext, useEffect } from 'react';
import './CartWidget.scss';
import { CarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {

    const {cantidadTotal} = useContext(CarritoContext);

    useEffect(() => {

        console.log(cantidadTotal);

    }, cantidadTotal)

    return (
        <button className="cartwidget"><p>{cantidadTotal}</p></button>
    )
}

export default CartWidget;