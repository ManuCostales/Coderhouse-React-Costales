
import React, {useState, useEffect} from "react";
import './ItemListContainer.scss';
import exportItems from '../MockAsync/MockAsync'
import ItemCard from "./ItemCard/ItemCard";
import '../Hero/Carousel/Carousel.scss'
import { ClipLoader } from "react-spinners";
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import exportItemsByCategory from '../MockAsync/MockAsync'
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const {idCategory} = useParams();

    //Cargando datos

    useEffect( () => {

        const getProducts = idCategory ? exportItemsByCategory : exportItems;

        getProducts(idCategory)
            .then((data) => {
                console.log(data);
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })

    }, [])


    //Handle click para cada card

    const handleClick = (id) => {
        
        console.log(id);

    }

    //Para mostrar contenido:

    let content = '';

    if (loading){
        //content = <p>Cargando Items...</p>
        content = <ClipLoader color="#FFF" size={50}/>
    }
    else if (error !== false){
        content = <p>Error: {error}</p>
    }
    else if (items.length < 1){
        content = <p>No Hay Items Para Mostrar.</p>
    }
    else {
        content = <ul className="item-list">{items.map( (item)=> {

            return <ItemCard onClick={handleClick} key={item.id} id={item.id} name={item.name} descr={item.descr} price={item.price} image={item.image} url={`detail/${item.id}`}></ItemCard>

        })}</ul>
    }

    return (

    <section className="item-list-container">

        <div className="overlay"></div>

        <h2 className="font-base-regular">{props.mensaje}</h2>

        {content}

        {/* <ItemDetailContainer></ItemDetailContainer> */}

    </section>

    )    

}

export default ItemListContainer;