import ImageShow from "./ImageShow";
import "./ImageList.css"

function ImageList({images}){

    const renderedImages = images.map((image)=>{
//? a cada imagen del arreglo que hacemos tenemos que pasarle un key
//? porque? porque con una key es mas facil ordenar los elementos
        return <ImageShow key={image.id} image={image}/>
    })

    return(
        <div className="image-list">
            {renderedImages}
        </div>

    )

}

export default ImageList;