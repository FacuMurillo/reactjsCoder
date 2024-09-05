
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";


function App(){
    return(
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer mensaje="Buenos dias, que quieres comprar hoy?"/>}/>
                    <Route path="/category/:id" element={<ItemListContainer  mensaje="Aquí están los productos de la categoría seleccionada"/>}/>
                    <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                    <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
                </Routes>
            </BrowserRouter>
                <ItemCount/>
        </div>
    )
}

export default App;