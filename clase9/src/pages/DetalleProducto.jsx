import {Link, useParams } from "react-router-dom";
import productos from "../data.js";

function DetalleProducto(){

    //? el metodo mas recomendado para usar es el find para buscar un elemento con un id

    console.log(useParams())
    const { DetalleProductoId } = useParams();
    
    //? creamos una constante resultadoFind donde buscamos en la lista de productos (de data.js) usamos find() para encontrar el producto que tiene el mismo id que DetalleProductoId. Si lo encuentra, lo guarda en resultadoFind. Luego, con console.log(resultadoFind), mostramos en la consola el producto que encontramos.
    const resultadoFind = productos.find((producto)=> producto.id == DetalleProductoId);
    console.log(resultadoFind);

    return(
        <div>
            <h2>{resultadoFind.title}</h2>
            <div>
                <img src={resultadoFind.image} alt="" />
                <p>{resultadoFind.description}</p>
                <h4>Precio: {resultadoFind.price}</h4>
            </div>
            {/* <Link to="/home/productos">Volver a Productos</Link> */}
        </div>
    )
}

export default DetalleProducto;