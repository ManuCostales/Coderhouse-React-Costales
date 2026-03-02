import React, { useContext, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import {db, getSingleProduct} from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import { addNewOrder } from "../../services/config"; 
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from 'react-toastify';

import { alertError, alertSuccess, alertNotif, checkoutError, checkoutSuccess } from '../../utils/alertas';

import Summary from '../Summary/Summary';
import "./Checkout.scss";

export const Checkout = () => {
  
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const {listaProductos, emptyCarrito, total, cantidadTotal} = useContext(CarritoContext);
    
    const navigate = useNavigate();

    const handleExit = () => {
        if (success){
            navigate("/");
        }
        else {
            navigate(-1);
        }
    }

    const refConfirmEmail = useRef(null);

    const validateTexto = (target, targetValue, tipo) => {

        const regexTexto = /^(?=.{1,100}$)(?!.*[\s-]{2})[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+(?:[ -][A-Za-zÁÉÍÓÚáéíóúÑñÜü]+)*$/;

        if (regexTexto.test(targetValue)){
            target.classList.remove("incorrect");
            target.classList.add("correct");
            if (tipo === "nombre"){
                setNombre(targetValue);
                return;
            }
            if (tipo === "apellido"){
                setApellido(targetValue);
                return;
            }
        }
        else {
            target.classList.remove("correct");
            target.classList.add("incorrect");
            return;
        }

    }

    const validateTelefono = (target, targetValue) => {

        const regexTelefono = /^(?=.{7,20}$)\+?[0-9]+(?:[ -]?[0-9]+)*$/;

        if (regexTelefono.test(targetValue)){
            target.classList.remove("incorrect");
            target.classList.add("correct");
            setTelefono(targetValue);
        }
        else {
            target.classList.remove("correct");
            target.classList.add("incorrect");
            return;
        }

    }

    const validateEmail = (target, targetValue, tipo) => {

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        if (regexEmail.test(targetValue)){
            if (tipo === "original"){
                setEmail(targetValue);
            }
            if (tipo === "confirmacion"){
                setEmailConfirmacion(targetValue);
            }
            target.classList.remove("incorrect");
            target.classList.add("correct");
        }
        else {
            target.classList.remove("correct");
            target.classList.add("incorrect");
            return;
        }

    }


    const handleFormulario = (event) => {
        event.preventDefault();

        //Campos completos
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            alertError("Todos los campos son obligatorios.");
            return;
        }

        //Campos email coincidan
        if (email !== emailConfirmacion){

            alertError("Los emails no coinciden.");
            refConfirmEmail.current.classList.remove("correct");
            refConfirmEmail.current.classList.add("incorrect");
            return;
        }

        setLoading(true);

        //Crear objeto de orden:
        const order = {
            item: listaProductos.map(prod => ({
                id: prod.item.id,
                nombre: prod.item.name,
                cantidad: prod.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre, apellido, telefono, email
        }

        Promise.all(

            order.item.map( async(productOrder) => {
                const productDoc = await getSingleProduct(productOrder.id);
                const stockActual = productDoc.stock;
                const prodRef = doc(db, "productos", productOrder.id);
                await updateDoc(prodRef, {
                    stock: stockActual - productOrder.cantidad
                })
            })

        )
        .then(() => {
            addNewOrder(order)
                .then(docRef => {
                    setOrderId(docRef.id);
                    setLoading(false);
                    emptyCarrito();
                    checkoutSuccess(docRef.id, navigate);
                    setSuccess(true);
                })
                .catch(error => {
                    setLoading(false);
                    console.log("Hubo un error al crear la orden", error);
                    setError(error);
                    checkoutError(navigate);
                })
            }
        )
        .catch(error => {
            setLoading(false);
            console.log("Hubo un error al actualizar el stock", error);
            setError(error);
            checkoutError(navigate);
        })

    }

    return (
        

        <div className="cart">
        
        <button onClick={handleExit} className="close"></button>
        <button onClick={handleExit} className="close-2"></button>

        <div className='cart-title'>
        <h2 className='font-base-regular'>Checkout<img src="" alt="" /></h2>
        </div>

        {loading && <ClipLoader color="#FFF" size={50}></ClipLoader>}

        {success && 
        
        <div className='checkout-success'>

            <h3 className='font-base-regular'>Gracias Por Tu Compra!</h3>
            <h4 className="font-base-regular">El ID de tu Orden es: <span>{orderId}</span></h4>
            <p className='font-base-light'>Revisa tu email para ver los siguientes pasos.</p>

        </div>    

        }
        {!success && <div className='cart-body'>

        <div className="checkout-form">

        <form>

        <fieldset className='fieldset-main'>
            <div className='form-field'>
                <label htmlFor="" className='font-base-regular'>Nombre *</label>
                <input type="text" placeholder="Juan" required  className='font-base-light' onChange={(e) => validateTexto(e.target, e.target.value, "nombre")}/>
            </div>
            <div className='form-field'>
                <label htmlFor="" className='font-base-regular'>Apellido *</label>
                <input type="text" placeholder="Pérez" required className='font-base-light' onChange={(e) => validateTexto(e.target, e.target.value, "apellido")}/>
            </div>
            <div className='form-field'>
                <label htmlFor="" className='font-base-regular'>Teléfono *</label>
                <input type="tel" placeholder="11 1234-5678" required className='font-base-light' onChange={(e) => validateTelefono(e.target, e.target.value)}/>
            </div>
        </fieldset>

        <fieldset className='fieldset-email'>
            <div className='form-field'>
                <label htmlFor="" className='font-base-regular'>Email *</label>
                <input type="email" placeholder="example@hotmail.com" className='font-base-light' required onChange={(e) => validateEmail(e.target, e.target.value, "original")}/>
            </div>
            <div className='form-field'>
                <label htmlFor="" className='font-base-regular'>Confirmar Email *</label>
                <input ref={refConfirmEmail} type="email" placeholder="example@hotmail.com" className='font-base-light' required onChange={(e) => validateEmail(e.target, e.target.value, "confirmacion")}/>
            </div>
        </fieldset>

        </form> 
            
        </div>

        <Summary total={total} cantidadTotal={cantidadTotal}></Summary>

        </div>}
        
        <div className='cart-footer'>
        {listaProductos.length > 0 && <button className="btn btn-accent-blue" onClick={handleFormulario}>FINALIZAR COMPRA</button>}
            <button onClick={handleExit} className="btn btn-primary">SALIR</button>
        </div>

        </div>
        
    )
}