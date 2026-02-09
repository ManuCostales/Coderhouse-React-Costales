
const imagenes = [
    '../../../public/mueble-1.jpeg',
    '../../../public/mueble-2.webp',
    '../../../public/mueble-3.webp',
    '../../../public/mueble-4.jpg',
    '../../../public/mueble-5.jpg',
    '../../../public/mueble-6.webp',
]

//Import de imagenes:

import imgMuebles from "../../assets/muebles.svg"
import imgMesas from "../../assets/mesas.svg"
import imgLamparas from "../../assets/lamparas-1.svg"
import imgAdornos from "../../assets/adornos.svg"

const categorias = [
    {
        id: 0,
        name: 'muebles',
        img: imgMuebles
    },
    {
        id: 1,
        name: 'mesas',
        img: imgMesas
    },
    {
        id: 2,
        name: 'lamparas',
        img: imgLamparas
    },
    {
        id: 3,
        name: 'adornos',
        img: imgAdornos
    }
];

const items = [
    {
        id: 0,
        name: 'Mueble de Madera 1',
        descr: 'Este es un mueble de madera.',
        price: 50000,
        image: '../../../public/mueble-1.jpeg',
        category: 'muebles',
        stock: 10,
        
        //Mas detalles:
        images: imagenes,
        height: 2.4,
        width: 1.80,
        weight: 6.8,
        woods: [
            'Nogal', 'Pino'
        ]
    },
    {
        id: 1,
        name: 'Mueble de Madera 2',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia molestiae voluptatum earum ratione reiciendis debitis dicta, repellendus quo facilis veritatis!',
        price: 50000,
        image: '../../../public/mueble-2.webp',
        category: 'muebles',
        stock: 26,

        //Mas detalles:
        images: imagenes,
        height: 2.4,
        width: 1.80,
        weight: 6.8,
        woods: [
            'Nogal', 'Pino'
        ]
    },
    {
        id: 2,
        name: 'Mueble de Madera 3',
        descr: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt nostrum inventore laudantium asperiores libero corporis quibusdam ex cupiditate error tenetur quia numquam alias expedita praesentium mollitia illo ipsa sint ducimus adipisci quidem, delectus, minima natus ad. Totam ipsa iste ipsam quasi voluptatem, sint fugit nesciunt, quidem repudiandae excepturi expedita necessitatibus.",
        price: 50000,
        image: '../../../public/mueble-3.webp',
        category: 'muebles',
        stock: 34,

        //Mas detalles:
        images: imagenes,
        height: 2.4,
        width: 1.80,
        weight: 6.8,
        woods: [
            'Nogal', 'Pino'
        ]
    },
    {
        id: 3,
        name: 'Mueble de Madera 4',
        descr: 'Este es un mueble de madera.',
        price: 50000,
        image: '../../../public/mueble-4.jpg',
        category: 'muebles',
        stock: 3,

        //Mas detalles:
        images: imagenes,
        height: 2.4,
        width: 1.80,
        weight: 6.8,
        woods: [
            'Nogal', 'Pino'
        ]
    },
    {
        id: 4,
        name: 'Mueble de Madera 5',
        descr: 'Este es un mueble de madera.',
        price: 50000,
        image: '../../../public/mueble-5.jpg',
        category: 'muebles',
        stock: 5,

        //Mas detalles:
        images: imagenes,
        height: 2.4,
        width: 1.80,
        weight: 6.8,
        woods: [
            'Nogal', 'Pino'
        ]
    },
    {
        id: 5,
        name: 'Mueble de Madera 6',
        descr: 'Este es un mueble de madera.',
        price: 50000,
        image: '../../../public/mueble-6.webp',
        category: 'muebles',
        stock: 22,

        //Mas detalles:
        images: imagenes,
        height: 2.4,
        width: 1.80,
        weight: 6.8,
        woods: [
            'Nogal', 'Pino'
        ]
    },
    {
        id: 6,
        name: 'Mueble de Madera 7',
        descr: 'Este es un mueble de madera.',
        price: 50000,
        image: '../../../public/mueble-1.jpeg',
        category: 'muebles',
        stock: 61,

        //Mas detalles:
        images: imagenes,
        height: 2.4,
        width: 1.80,
        weight: 6.8,
        woods: [
            'Nogal', 'Pino'
        ]
    },
    {
        id: 7,
        name: 'Lampara 1',
        descr: 'Esta es una lampara de madera',
        price: 50000,
        image: '../../../public/lampara-1.jpeg',
        category: 'lamparas',
        stock: 122,

        //Mas detalles:
        images: ['../../../public/lampara-1.jpeg', '../../../public/lampara-2.jpeg', "../../../public/lampara-3.jpeg"],
        height: 2.4,
        width: 1.80,
        weight: 6.8,
        woods: [
            'Nogal', 'Pino'
        ]
    },
    {
        id: 8,
        name: 'Lampara de Madera 9',
        descr: 'Esta es una lampara de madera',
        price: 50000,
        image: '../../../public/lampara-4.jpeg',
        category: 'lamparas',
        stock: 4,

        //Mas detalles:
        images: ["../../../public/lampara-4.jpeg", "../../../public/lampara-5.jpeg"],
        height: 2.4,
        width: 1.80,
        weight: 6.8,
        woods: [
            'Nogal', 'Pino'
        ]
    },
    {
        id: 9,
        name: 'Mesa de Madera 10',
        descr: 'Esta es una mesa de madera',
        price: 50000,
        image: '../../../public/mesa-3.jpeg',
        category: 'mesas',
        stock: 9,

        //Mas detalles:
        images: ['../../../public/mesa-3.jpeg', '../../../public/mesa-4.jpeg'],
        height: 2.4,
        width: 1.80,
        weight: 6.8,
        woods: [
            'Nogal', 'Pino'
        ]
    },
    {
        id: 10,
        name: 'Mesa de Madera 11',
        descr: 'Esta es una mesa de madera',
        price: 50000,
        image: '../../../public/mesa-1.jpeg',
        category: 'mesas',
        stock: 5,

        //Mas detalles:
        images: ['../../../public/mesa-1.jpeg', '../../../public/mesa-2.jpeg'],
        height: 2.4,
        width: 1.80,
        weight: 6.8,
        woods: [
            'Nogal', 'Pino'
        ]
    },
    {
        id: 8,
        name: 'Lampara de Madera 12',
        descr: 'Esta es una lampara de madera',
        price: 50000,
        image: '../../../public/lampara-4.jpeg',
        category: 'lamparas',
        stock: 32,

        //Mas detalles:
        images: ["../../../public/lampara-4.jpeg", "../../../public/lampara-5.jpeg"],
        height: 2.4,
        width: 1.80,
        weight: 6.8,
        woods: [
            'Nogal', 'Pino'
        ]
    },
]

function exportItems(){

    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            if (2 + 2 === 4){
                // resolve(items.map(item => {

                //     return {
                //         id: item.id,
                //         name: item.name,
                //         descr: item.descr,
                //         price: item.price,
                //         image: item.image,
                //         url: item.url
                //     }

                // }));
                resolve(items);
            }
            else {
                reject('Error de Conexión');
            }
        }, 4000)
    })
}

export function exportSingleItem(id){

    const parseId = Number(id);

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            
            if (!id || Number.isNaN(parseId)){
                reject("No se ha proporcionado un ID válido.");
                return;
            }

            const foundItem = items.find(item => item.id === parseId);

            if (!foundItem) {
                reject("No se ha encontrado al item.");
                return;
            }

            resolve(foundItem);

        }, 3000)

    })

}

export function getAllCategories() {

    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            
            if (categorias){
                resolve(categorias);
            }
            else {
                reject("No se han encontrado categorias");
            }

        }, 1000);

    })

}

export function exportItemsByCategory(id){

    console.log("CATEGORIA:" + id);

    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            if (id) {
                console.log(items.filter(item => item.category === id))
                resolve(items.filter(item => item.category === id));
            }
            else {
                reject("No se ha proporcionado un ID valido.");
            }
        }, 2000)

    })

}

export default exportItems;