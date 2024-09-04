
import { Link } from "react-router-dom";

function NavBar(){

    return(
        <nav>
            <Link to="/home">Home</Link> 
            <Link to="/home/galeria">Galeria</Link> 
            <Link to="/home/productos">Productos</Link> 
        </nav>
    )
}
export default NavBar;