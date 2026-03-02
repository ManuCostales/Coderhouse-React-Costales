//1 - Importar useState y createContext
import {useState, createContext, useEffect} from 'react';


//2 - Crear el contexto
export const CarritoContext = createContext({

    listaProductos: [],
    total: 0,
    cantidadTotal: 0

})

export const CarritoProvider = ({children}) => {

    //States
    const [listaProductos, setListaProductos] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const isInCart = (itemId) => {
        if (listaProductos.find(prod => prod.item.id === itemId)){
            return true;
        }
        else {
            return false;
        }
    }

    const addCarrito = (item, cantidad) => {

        if (!item){
            throw new Error("Producto Invalido");
        }
        else if (cantidad <= 0){
            throw new Error("Cantidad Invalida");
        }
        else if (cantidad > item.stock){
            throw new Error("No Hay Stock Suficiente");
        }
        else {
            setListaProductos(prev => [
                ...prev,
                { item, cantidad }
            ]);
        }

      };

    const removeCarrito = (itemId) => {

        const found = listaProductos.find(prod => prod.item.id === itemId);

        if (found){
            setListaProductos(prev => prev.filter(prod => prod.item.id !== itemId));
        }
        else {
            console.log("No se encontro el Item a eliminar");
        }
    }

    const updateCarrito = (itemId, newCantidad) => {

        if (itemId === undefined){
            throw new Error("Producto Invalido");
        }

        const foundItem = listaProductos.find(prod => prod.item.id === itemId);

        if (!foundItem){
            throw new Error("Producto no existe en carrito.");
        }
        if ( newCantidad <= 0 ){
            throw new Error("Cantidad Invalida");
        }
        if ( newCantidad > foundItem.item.stock ){
            throw new Error("No Hay Stock Suficiente");
        }

        setListaProductos(prev => {

            const carritoUpdated = prev.map(prod =>
                prod.item.id === itemId
                ? { ...prod, cantidad: newCantidad }
                : prod
            );
        
            return carritoUpdated;

            });
        
    }

    //Para manejar los totales:
    useEffect(() => {
        const newCantidadTotal = listaProductos.reduce(
          (acc, prod) => acc + prod.cantidad,
          0
        );
      
        const newTotal = listaProductos.reduce(
          (acc, prod) => acc + prod.item.price * prod.cantidad,
          0
        );
      
        setCantidadTotal(newCantidadTotal);
        setTotal(newTotal);
      
      }, [listaProductos]);

    const findQuantity = (itemId) => {

        const prod = listaProductos.find(prod => prod.item.id === itemId);
        if (prod) {
            return prod.cantidad;
        } else {
            return 1;
        }

    }

    const emptyCarrito = () => {

        setListaProductos([]);

    }

    return (

        <>

            <CarritoContext.Provider value={{
                listaProductos, cantidadTotal, total, addCarrito, removeCarrito, updateCarrito, emptyCarrito, findQuantity, isInCart
            }}>
                {children}
            </CarritoContext.Provider>

        </>
    )
}