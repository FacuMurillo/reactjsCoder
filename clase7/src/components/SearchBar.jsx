import { useState } from "react";
import "./SearchBar.css"

function SearchBar({enSubmit}){

    const [term, setTerm] = useState("");

    function handleForSubmit(event){
//? con esto lo que hacemos es que la function no haga el submit, yo hare la peticion HTTP
        event.preventDefault();
        enSubmit(term);
    }

    function handleChange(event){

        setTerm(event.target.value);

    }

//? EXPLICACION: hacemos un div con un SearchBar y cuando el usuario coloque el termino y presione CLICK , sucede el evento click llama a la funcion "handleClick" y esta funcion lo que hace es invocar lo que tiene adentro, en este caso enSubmit("Gatitos").
    return (
        <div className="search-bar">
            <form onSubmit={handleForSubmit}>
                 <input value={term} type="text" onChange={handleChange}/>
            </form>
        </div>
    )

}

export default SearchBar;