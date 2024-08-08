import React from "react";
import ReactDOM from "react-dom/client";

//? para mostrar el componente siempre hay que importarlo
import App from "./App";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);


// function App(){

//     return <h1>Hola desde React</h1> //? JSX ES COMO HTML PERO NO 
// }

root.render(<App/>)

//* PRIMERO LO PASAMOS A JSX Y LUEGO SE TRANSFORMA CON BABEL A JS REGULAR

//? Component Layout

function AppLayout(){
    
    //? siempre habra una parte logica que seria JS 
    const nombre = "Facu";
    const apellido = "Murillo";
    
    //* para llamar a las variables siempre es con {}
    //* siempre retorna un JSX
    return <h2>Bienvenido {nombre} {apellido}</h2>
}
root.render(<AppLayout/>)


//* PROPS 

//? sirven para customizar un elemento

function AppProps(){ 
    return <input type="number" min={5} max={10} /> 
    //?   este es un ejemplo el type, min y max son los props
}
root.render(<AppProps/>)

//? Como van los props 
//* string: ""
//* numeros: {}
//* arrays: {}
//* objectos: {}
//* variables: {}

//? si queremos agregar un class a un elemento html tenemos que poner className:""

function App2(){ 
//* siempre que quieramos enviar una estructura html tenemos que poner return y agregar comillas ()
    return (
        <div>
            <div>
                <h1>Titulo</h1>
                <p>Parrafo 1</p>
            </div>
            <div>
                <h1>Titulo 2</h1>
                <p>Parrafo 2</p>
            </div>
        </div>
    )
}
root.render(<App2/>)