//! import React from "react";
//! import ReactDOM from "react-dom";

import App from "./App";

//? esta es la version anterior a react 18, donde se podia hacer esto

//* version detallada y explicita
//! const contenedor = document.getElementById("root");
//! const root = ReactDOM.createRoot(contenedor);
//! root.render(<App/>);

//? version compacta
//* ReactDOM.render(<App/>, document.getElementById('root'));

//? A PARTIR DE AHORA SE PUEDE SIMPLIFICAR ESTO 

import { createRoot } from 'react-dom/client';

//? de forma explicita y detallada 

// const contenedor = document.getElementById("root");
// const root = createRoot(contenedor);
// root.render(<App/>)

//? y de forma simplificada

createRoot(document.getElementById('root')).render(<App />)
