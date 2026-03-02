
import React, {useState, useEffect, forwardRef, useRef} from "react";
import './ItemListContainer.scss';
import ItemCard from "./ItemCard/ItemCard";
import '../Hero/Carousel/Carousel.scss'
import { ClipLoader } from "react-spinners";
import imgTodo from "../../assets/todo.svg"
import { useParams, Link } from "react-router-dom";

//Importo funciones para acceder a la DB:
import { getAllProducts, getProductsByCategory, getCategories } from "../../services/config";

const ItemListContainer = forwardRef((props, ref) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null);
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef(null);

    const {idCategory} = useParams();

    useEffect( () => {

        setLoading(true);

        const getProducts = idCategory ? getProductsByCategory : getAllProducts;

        //Cargo productos:
        getProducts(idCategory)
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                setError(error);

            })
            .finally(() => {
                setLoading(false);
            })

        //Cargo categorias:
        getCategories()
            .then((data) => {
                setCategories(data);
            })
            .catch((error) => {
                setError(error);
            })

    }, [idCategory])

    //Para cargar categorias en el fitler de dropdown
    useEffect( () => {
        if (!categories.length) return;

        if (!idCategory) {
            setCategory(null);
        }
        else {
            const found = categories.find(cat => cat.name === idCategory);
            found ? setCategory(found) : setCategory(null)
        }

    }, [idCategory, categories])

    //Cerrar dropdown al hacer click fuera
    useEffect(() => {
        const handleClickOutside = (e) => {
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(e.target)
          ) {
            setOpen(false);
          }
        };
      
        if (open) {
          document.addEventListener("mousedown", handleClickOutside);
        }
      
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [open]);

    //Para mostrar contenido:

    let content = '';

    if (loading){
        content = <ClipLoader color="#FFF" size={50}/>
    }
    else if (error !== false){
        content = <p>Error: {error}</p>
    }
    else if (items.length < 1){
        content = <p className="font-base-regular">No Hay Items Para Mostrar.</p>
    }
    else {
        content = <ul className="item-list">{items.map( (item)=> {
            if (item.stock <= 0){
                return;
            }
            else {
                return <ItemCard  key={item.id} id={item.id} name={item.name} descr={item.descr} price={item.price} image={item.image} url={`/trabajos/${item.category}/${item.id}`}></ItemCard>
            }
        })}</ul>
    }

    return (

    <section ref={ref} className="item-list-container">

        <div className="overlay"></div>

        <div className="item-list-upper">
            <h2 className="font-base-regular">{props.mensaje}</h2>
            <div className="item-list-upper-right">
                <p className="font-base-light color-light">Filtrar por:</p>
                {categories && (
                    <div className="selector-categorias" ref={dropdownRef} style={{
                        opacity: loading ? 0.5 : 1,
                        pointerEvents: loading ? "none" : "auto",
                      }}>

                        <button
                        onClick={() => setOpen(prev => !prev)}
                        className="font-base-regular color-light"
                        type="button"
                        >
                        <img src={category?.img || imgTodo} />
                        {category?.name || "Todo"}
                        </button>

                        {open && (
                        <div className="dropdown-options">

                            {<Link
                                to="/trabajos"
                                key={null}
                                className="font-base-regular"
                                onClick={() => setOpen(false)}
                            >
                                <img src={imgTodo} />
                                Todo
                            </Link>}

                            {categories.map(cat => (
                                
                            <Link
                                to={`/trabajos/${cat.name}`}
                                key={cat.id}
                                className="font-base-regular"
                                onClick={() => setOpen(false)}
                            >
                                <img src={cat.img} />
                                {cat.name}
                            </Link>
                            ))}
                            
                        </div>
                        )}
                    </div>
                    )}
            </div>
            
        </div>        

        {content}


    </section>

    )    

})

export default ItemListContainer;