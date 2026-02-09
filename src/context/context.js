

//Contexto:

/* 

    Tienen 3 partes:

    -El contexto en si.
    -El proveedor de contexto, componente que envuelve a toda la app, para que pueda recibir los datos.
    -El consumidor de contexto, es un componenten que accede a esos datos globales.

    PASOS:

    1) Crear el contexto(puedo darle valor default)

    2)Importar el contexto en la App

    3)Proveer el contexto en el componente App

*/

import { createContext } from "react";

export const Contexto = createContext(null);

