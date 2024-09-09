
//? exportamos el router dom
import {BrowserRouter,  Routes, Route} from "react-router-dom"; 
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Productos from "./pages/Productos";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import DetalleProducto from "./pages/DetalleProducto";
import "./App.css"; //? importamos el css de App


function App(){
//? hay componentes que tienen apertura y cierre como BrowserRouter
//* que es un BrowserRouter es un router, trabaja con un api para manejar la URL y la interfaz del usuario 
//? BrowserRouter es el componente padre, ojo con dejar cosas afuera

//* BrowserRouter es el contenedor padre que contiene cada una de las rutas de mi sitio y Route es el contenedor de cada ruta

//? Route puede tener dos atributos: Path y Element. path sirve para enviar la URL y Element sirve para cargar el elemento que va a cargar al ingresar la URL 

//* <Route path="*" element={<Error/>}/> lo usamos para mostrar Error al buscar una pagina o categoria que no existe
//? Rutas anidadas es poner una Route y dentro las demas Route

//?                             CLASE 10
//* cuando queremos llegar pagina producto se conoce como parametro por url, es un valor que le pasamos al componente DetalleProducto.jsx
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="galeria" element={<Galeria/>}/>
                    <Route path="productos"element={<Productos/>}/>
                    <Route path="productos/:DetalleProductoId" element={<DetalleProducto/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App;