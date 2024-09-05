import "../NavBar.css"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

function NavBar(){
    return(
        <div className="contenedorNavBar">
                <h1><Link to="/">TIENDAFACU</Link></h1>
            <ul className="NavBar">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/category/monitores">Monitores</Link></li>
                <li><Link to="/category/placas">Placas de Video</Link></li>
            </ul>
                <CartWidget/>
        </div>
    )
}

export default NavBar