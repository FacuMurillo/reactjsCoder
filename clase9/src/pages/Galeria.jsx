
import { Link } from "react-router-dom";

function Galeria(){


//? el Link to="" funciona como una etiqueta <a href=""></a> de HTML 
    return(
        <main>
            <h1>Galeria</h1>
            <Link to="/">Home</Link>
        </main>
    )
}

export default Galeria;