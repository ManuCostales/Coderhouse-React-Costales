import { useContext, useEffect } from 'react';
import './CartWidget.scss';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const {cantidadTotal} = useContext(CarritoContext);

    return (
        <Link to="/cart"><button className="cartwidget"><p className='font-base-regular'>{cantidadTotal}</p><span></span></button></Link>
    )
}

export default CartWidget;