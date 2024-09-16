
import { useContext } from "react";
import { DataContext } from "../context/datosContext";
//? PRIMERO: IMPORTAS LAS VARIABLES DataContext y UseContext
//* SEGUNDO: creamos una const donde lo consumamos "useContext"

function NietoUno(){

    const {datosNieto} = useContext(DataContext);
//? se puede mandar compartir una varible de estado, lo recibimos 
    const {contador , setContador} = useContext(DataContext);

    return(
        <div>
            <p>Nieto Uno</p>
     {/*    //* mostramos que tiene ese objeto */}
            <h2>{JSON.stringify(datosNieto)}</h2>
            <h2>{JSON.stringify(datosNieto.nombre)}</h2>
            <h2>{JSON.stringify(datosNieto.apellido)}</h2>
     {/*    //* agregamos el contador */}
            <button onClick={ () => setContador(contador+1)}> {contador} </button>
        </div>
    )
}

export default NietoUno;