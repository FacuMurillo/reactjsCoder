
//? ahora enviaremos una imagen a otro componente, siempre la primera con MAYUSCULAS


//* le podemos pasar una URL desde mi componente padre usando el props
export const Imagen = ({props}) => {
    return(
        <>
        <img src={props} alt=""/>
        </>
    )
}