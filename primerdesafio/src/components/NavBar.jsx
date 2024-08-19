import "../NavBar.css"
import CartWidget from "./CartWidget"

function NavBar(){
    return(
        <div className="contenedorNavBar">
                <h1><a href="#">TIENDAFACU</a></h1>
            <ul className="NavBar">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
                <CartWidget/>
        </div>
    )
}

export default NavBar