//1 - Importar useState y createContext
import {useState, createContext} from 'react';


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

    const addCarrito = (item, cantidad) => {

        if (!listaProductos.find(prod => prod.item.id === item.id)){
            setListaProductos(prev => [...prev, {item, cantidad}]);
            console.log("SE HA AÑADIDO AL CARRITO");
            console.log(listaProductos)
        }
        else {

            const carritoUpdated = listaProductos.map((prod) => {

                if (prod.item.id === item.id) {
                    return {...prod, cantidad: prod.cantidad + cantidad}
                }
                else {
                    return prod;
                }
            })

            setListaProductos(carritoUpdated);
            console.log("SE HA ACTUALIZADO AL CARRITO");
            
        }

        setTotal[prev => prev + (item.price * cantidad)]
        setCantidadTotal[prev => prev + cantidad];

        console.log(listaProductos)
        console.log(cantidadTotal)

    }

    const removeCarrito = (itemId) => {

        const found = listaProductos.find(prod.item.id === itemId);

        if (found){
            setListaProductos(prev => prev.filter(prod => prod.item.id !== itemId));
            setCantidadTotal(prev => prev - found.cantidad);
            setTotal(prev => prev - (found.item.price * found.cantidad));
        }
        else {
            console.log("No se encontro el Item a eliminar");
        }
    }

    const updateCarrito = (itemId, cantidad) => {
        
        const found = setListaProductos.find(prod.item.id === itemId);
        if (found){
            const carritoUpdated = listaProductos.map((prod) => {
                if (prod.item.id === itemId) {
                    return prod = {...prod, cantidad: cantidad};
                }
                else {
                    return prod;
                }
            })
            setListaProductos(carritoUpdated);
            setCantidadTotal(prev => prev - cantidad);
            setTotal(prev => prev - (cantidad * found.price));
        }
        else {
            console.log("No se encontro el Item a actualizar");
        }

    }

    const emptyCarrito = () => {

        setListaProductos([]);
        setCantidadTotal(0);
        setTotal(0);

    }

    return (

        <>

            <CarritoContext.Provider value={{
                listaProductos, cantidadTotal, total, addCarrito, removeCarrito, updateCarrito, emptyCarrito
            }}>
                {children}
            </CarritoContext.Provider>

        </>

    )


}


// export const CarritoProvider = ({children}) => {

//     //3 - Creamos el estado para el carrito, total y cantidad total
//     const [carrito, setCarrito] = useState([]);
//     const [total, setTotal] = useState(0);
//     const [cantidadTotal, setCantidadTotal]  = useState(0);

//     console.log(carrito);

//     //4 - Funciones para la logica del carrito

//     const agregarAlCarrito = (item, cantidad) => {

//         const productoExistente = carrito.find(prod => prod.item.id === item.id)

//         if (!productoExistente){
//             setCarrito(prev => [...prev, {item, cantidad}]);
//             setCantidadTotal(prev => prev + cantidad);
//             setTotal(prev => prev + (item.precio * cantidad))
//         }
//         else {
//             const carritoActualizado = carrito.map(prod => {
//                 if (prod.item.id === item.id){
//                     return {...prod, cantidad: prod.cantidad + cantidad};
//                 }
//                 else {
//                     return prod;
//                 }
//             })
//             setCarrito(carritoActualizado);
//             setCantidadTotal(prev => prev + cantidad);
//             setCantidadTotal(prev => prev + (item.precio * cantidad));
//         }

//     }

//     const eliminarDelCarrito = (id) => {
//         const found = carrito.find(prod => prod.item.id === id);
//         const carritoActualizado = carrito.filter(prod => prod.item.id !== id)
        
//         setCarrito(carritoActualizado);
//         setCantidadTotal(prev => prev - found.cantidad);
//         setTotal(prev => prev - (found.item.precio * found.cantidad));
//     }

//     const vaciarCarrito = () => {
//         setCarrito([]);
//         setCantidadTotal(0);
//         setTotal(0);
//     }

//     return(
//         <>
//         <CarritoContext.Provider value={{
//             carrito, total, cantidadTotal, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito
//         }}>
//             {children}
//         </CarritoContext.Provider>
//         </>
//     )

// }