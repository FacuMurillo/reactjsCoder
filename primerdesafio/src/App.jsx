
import { ItemListContainer } from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App(){
    return(
        <div>
            <NavBar/>
            <ItemListContainer mensaje="Buenos dias, que quieres comprar hoy?"/>
        </div>
    )
}

export default App