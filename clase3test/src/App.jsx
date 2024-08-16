//? importamos un componente: en este caso un Titulo
import { useState } from "react"
import { Imagen } from "./Imagen"
import { Titulo } from "./Titulo"

//? LINEA <Imagen/>) si queremos enviarle un props tenemos que agregarle desde parametros la etiqueta <Imagen/> y dentro el nombre que quieramos ImagenURL o Loquequiera
function App() {
//  const [mensaje, setMensaje]   = useState("Hola");
    const [contador, setContador] = useState(0);
//? para usar el onClick necesitamos siempre una function: podemos crearla aparte a la funcion o usar una funcion flecha 
//?     <button onClick={setMensaje}></button>
    return(
      <>
        <h1>Holaa</h1>
        <Titulo/>
        <Imagen props ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHjBgg6SiOFSfxfVZYbqOqSOfC9zEJ9GFpA&s"/>

        <h2>{contador}</h2>

        <button onClick={()=>{
            setContador(contador + 1)
        }}>+1</button>

        <button onClick={()=>{
            setContador(contador - 1)
        }}>-1</button>
      </>
    )
}
export default App