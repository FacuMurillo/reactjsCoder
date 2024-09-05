

import { useEffect, useState } from "react";
import { useParams , Link } from "react-router-dom";
import { fetchProductsByCategory } from  "../components/api";
import "./ItemListContainer.css"


function ItemListContainer({ mensaje }) {
    const { id } = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const cargarProductos = async () => {
            const productos = await fetchProductsByCategory(id);
            setProductos(productos);
        };
        cargarProductos();
    }, [id]); 

    return (
        <div>
            <h3 className="mensajeProps animate__animated animate__jackInTheBox">
                {mensaje}
            </h3>
            <h2>Catálogo de Productos</h2>
            <div className="catalogo"> 
            <ul className="listaProductos">
             {productos.map((producto) => (
                <li key={producto.id}>
                     <Link to={`/item/${producto.id}`}>{producto.name}</Link>
                </li>
             ))}
            </ul>
            </div>    
        </div>
    );
}

export default ItemListContainer;