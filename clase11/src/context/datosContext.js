
//* Paso 1) para crear un contexto es importar la funcion createContext
import { createContext, useState } from "react";


export const DataContext = createContext();
//? El contexto puede tener dos componentes si se puede decir uno que se llama:
//* PROVIDER: componente que lo utilizaremos para especificar que datos queremos compartir

//* CONSUMER: componente utlizado para acceder a esos datos (NO MUY UTILIZADO).

const datosNieto = {
    nombre:"Facu",
    apellido:"Murillo",
    edad: 22
  };
   
function CompPadre({children}){

//? EXTRA): se puede mandar variables de estado con el context 

const [contador , setContador] = useState(0); //* enviar en el value=({contador, setContador})
 
//? PASO 2) Especificar que datos vamos a compartir: 
    return(
        <DataContext.Provider value={{datosNieto, contador, setContador}}>
            {children}
        </DataContext.Provider>
    )
//? PASO 3) ahora todos esos datosNietos lo ven mis componentes y decidimos quien los va a consumir y quien no 
}

export default CompPadre;