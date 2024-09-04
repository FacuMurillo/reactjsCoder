
import { Link } from "react-router-dom"

function Error(){
    
    return(
        <main>
            <h1>404</h1>
            <p>Pagina no encontrada</p>
            <Link to="/">Home</Link>
        </main>
    )
}
export default Error;