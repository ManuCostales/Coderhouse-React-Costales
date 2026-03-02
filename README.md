# TIENDA/E-COMMERCE PARA CARPINTERO

Web App

## Tecnologias Utilizadas:
-Vite
-Scss
-React
-React-Router-DOM
-Firebase
-SweetAlert
-Embla Carousel
-Toastify
-Dot-env

## Funcionalidades:

-Ver una lista de distintos productos de carpinteria, con opción de filtrado por categoría.
-Utilización de un carrito para la compra de uno o mas productos.

# Secciones

-HOMEPAGE ("./") : Hero Section y botones CTA.
-ACERCA DE MI ("/acerca"): Hero Section y contenido acerca de carpintero (A terminar...)
-MIS TRABAJOS ("/trabajos" o "/trabajos/categoria"): Hero Section y lista de productos con filtro por categoria.
-ITEM DETAIL ("/trabajos/categoria/idProducto"): Vista de un producto con su información y fotos.
-CARRITO ("/cart"): Vista del carrito, junto con detalles totales y lista de productos a comprar.
-CHECKOUT ("/checkout"): Form para ingresar detalles del usuario y finalizar la compra.

# Flujo Principal de la App para Comprar un producto

1 - Ingresar al sitio.
2 - Ir a "/trabajos".
3 - Esperar a la carga de la lista de productos.
4 - Filtrar por categoria si es necesario.
5 - Clickear en un producto para ir a su vista de detalle.
6 - Dentro de la vista de detalle, decidir cuantos productos agregar al carrito utilizando el contador. Una vez ingresado el numero, clickear en "COMPRAR AHORA" para proceder al carrito, o simplemente "AÑADIR AL CARRITO" por si se quiere seguir agregando mas productos.
7 - Ir a "/cart". Una vez dentro, chequear el detalle y precio total de los productos. Agregar o eliminar productos si es necesario. Clickear en "FINALIZAR COMPRA" para proceder al checkout.
8  - Una vez en "/checkout", rellenar los datos del formulario y clickear en "FINALIZAR COMPRA" para generar la orden.

## Dominio:

[text](https://coderhouse-react-costales.vercel.app/)