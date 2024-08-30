import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import { useState } from "react";


function App(){

//? se crea la variable de ESTADO con un valor de arreglo vacio
    const[img, setImg] = useState([]);

//? se crea la function handleSubmit pero no se ejecuta
    const handleSubmit = async (term)=>{
        const resultado = await searchImages(term);
        setImg(resultado);
    }

//? se invoca SearchBar y le mandamos la referencia a la fucion que se creo arriba ↑
//? se renderiza SearchBar


//? se renderiza ImageList
    return (
        <div>
            <SearchBar enSubmit={handleSubmit}/>
            <ImageList images={img}/>
        </div>
    )
}

export default App;