
import { Outlet } from "react-router-dom";
//? el compontene outlet lo que hace es mostrar lo que tiene el hijo y no pisar el estilo de home
import NavBar from "../components/NavBar";

function Layout(){

    return(
        <div>
            <header>
                <h1>Facu web</h1>
            </header>
            <NavBar/>
            <Outlet/>
            <footer>
                <p>By Facu</p>
            </footer>
        </div>
    )
}

export default Layout;