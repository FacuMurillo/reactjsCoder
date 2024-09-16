

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
            {/* <h3 className="mensajeProps animate__animated animate__jackInTheBox">
                {mensaje}
            </h3> */}
            <h2>Catálogo de Productos</h2>
            <div className="catalogo"> 
            <ul className="listaProductos">
             {productos.map((producto) => (
                <div className="card">
                    <img className="imgList" alt="" src={producto.image}/>
                    <li key={producto.id}>
                        <Link to={`/item/${producto.id}`}>{producto.name}</Link>
                    </li>
                    <h4>${producto.precio.toLocaleString("es-ES")}</h4>  
                </div>
             ))}
            </ul>
            </div>    
        </div>
    );
}

export default ItemListContainer;