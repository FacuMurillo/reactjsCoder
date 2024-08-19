
//? importamos el useState
import { useState } from "react"

//* para recibir el titulo y arroba tengo q pasar por parametros "objeto props"
function ProfileCard({titulo,arroba,img}){
        //? let {titulo,arroba,img} = props;
        // console.log(props)
        // <h3>{props.titulo}</h3>
        // <h3>{props.arroba}</h3>
//? le pasamos la referencia no llamar la funcion al boton 
//* <button onClick={handleClick}> SI
//! <button onClick={handleClick()}> NO

//? definimos un estado con la funcion useState, por default es 0
    const [count, setCount] = useState(0);
    //* usaState: es un HOOK

    function handleClick(){
        console.log("Se clickeo el boton");
        return(
            setCount( count + 1)
        )
    }
//? STATE: son datos que cambian a medida que el usuario interactua en la pagina 
//? cuando cambian React actualiza el contenido automaticamente
//? es la unica forma en React de cambiar el contenido que muestra

    return(
        <div>
            <div>
                <h2>Carta de Asistente</h2>
                <h3>{titulo}</h3>
                <p>{arroba}</p>
                <img src={img} alt=""/>
            </div>
            <button onClick={handleClick}>
                <p>+</p>
            </button>
            <div>
                <span><p>Likes: {count}</p></span>
            </div>
        </div>
    )
}

export default ProfileCard 