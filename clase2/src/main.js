
//* traigo la libreria de react / estan en node_modules y ahi estan las carpetas react y react-dom
import React from "react"; //? libreria react sirve para define que es un componente y como funciona con otros componentes

import ReactDOM from "react-dom"; //? libreria que sabe que hacer y como aparecer los componente en la pantalla/navegador

//* seleccionamos un div en el index.html con la id("root") 
//* obtenemos una referencia al div root
const elemento = document.getElementById("root");

//* luego le diremos a react que tome el control de ese elemento
//* lo que hacemos a traves de la libreria DOM que sirve para renderizar en pantalla los componentes
const root = ReactDOM.createRoot(elemento); //? creamos una raiz dentro del contenedor (root)
//? le decimos que con React creame una raiz de react 

//! por que hacemos esto? 
//* porque es la forma que tenemos para mostrar los componentes en la pantalla

//? para renderizar le decimos "che root renderizame este componente" 
function componenteX(){
        return <h1>Hola</h1>
    }
     root.render(<componenteX/>)
                
//! que es un componente?
//* en React son las piezas que componen la interfaz del usuario o en JS podemos verla como funciones