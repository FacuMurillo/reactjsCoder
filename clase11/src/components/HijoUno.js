
import NietoUno from "./NietoUno";


//* aqui recibimos los datos que le paso el PADRE AL HIJO y ahora nos los envia el HIJO AL NIETO 
//? children son los props que pasamos <h2/> y <p/> y datos son el objeto datosNieto
function HijoUno({children, datos}){
    return(
        <div>
            <p>Texto desde HijoUno</p>
            {children}
            <NietoUno datos={datos}>
                <p>Texto desde el hijo al nieto desde Hijo</p>
            </NietoUno>
        </div>
    )
}

export default HijoUno;