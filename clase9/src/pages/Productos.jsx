
import { Link } from "react-router-dom";
import productos from "../data.js";
import "./Productos.css";

function Productos(){
    
//? usamos el .map para recorrer una lista de datos y crear elementos en la pantalla automáticamente, si tenemos una lista de productos el .map() nos permite mostrar cada producto en la pagina sin tener que escribirlo manualmente
    
//* en otros terminos el .map() sirve para tomar una lista de cosas (como nombres, productos o tareas) y mostrar cada una en la pantalla sin tener que hacerlo a mano una por una.

//? basicamente le decimos a react : "che toma esta lista y crea algo visual para cada elemento"

//* por cada una de esa iteracion del map vamos a ejecutar esta funcion flecha el bloque de jsx esto se conoce como "MAPING" 

//? cuando hacemos mapeo tenemos que darle un id o key a cada elemento para que react pueda identificar cada elemento agregamos un atributo Key={producto.id}, el key puede ir en un div, articulo

    return(
        <main>
            <h1>Productos</h1>
            <Link to="/home">Home</Link>
            <div className="galeria">
                {productos.map((producto)=>{
                    return(
                        <article key={producto.id}>
                            <h4>{producto.title}</h4>
                            <img src={producto.image} alt="" />
                            <Link to={`${producto.id}`}>Mas info</Link>
                        </article>
                    )
                })}
            </div>
        </main>
    )
}

export default Productos;