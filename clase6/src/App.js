import { useState, useEffect } from "react";


//? useEffect es un hook, nos permite realizar efectos secundarios a nuestro componente


function App(){
    
    const [contadorUno, setContadorUno] = useState(0);
    const [contadorDos, setContadorDos] = useState(0);

    useEffect(()=>{
        console.log("llamado de useEffect")
    }) 
    //? de esta forma aparecera siempre que actualicemos el componente ya se tocando contadorUno o contadorDos
    
    useEffect(()=>{
        console.log("llamado de useEffect")
    }, []) 
    //? de esta forma solo se actualizara una sola vez al renderizar el componente

    useEffect(()=>{
        console.log("llamado de useEffect")
    } , [contadorUno] ) 
    //? y asi se mostrara el consolo.log siempre que toquemos el boton contadorUno 

    return(
        <div>
            <div>
                <button onClick={()=>setContadorUno(contadorUno+1)}>Contador Uno</button>
                <p>{contadorUno}</p>
            </div>
            <div>
                <button onClick={()=>setContadorDos(contadorDos+1)}>Contador Dos</button>
                <p>{contadorDos}</p>
            </div>
        </div>

    )
}


export default App;