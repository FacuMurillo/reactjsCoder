import axios from "axios"; //? libreria que se encarga de hacer el fetch

//? la function searchImage (sincronica) se encarga de buscar las imagenes
const searchImages = async ( term )=>{
//? mandamos el term como parametros

//* creamos una variable que se encarga de recibir la respuesta del (axios.get) que es una peticion HTTP a esa direccion

//? axios trabaja con promesas asi que para consumir de forma correcta el responso es poner     await.

//? con esto le decimos a la promesa que vamos a esperar que el servidor responda y una vez la asigno a mi variable "response".

//? recordar que para usar el await la FUNCTION tiene que ser sincronica ASYNC.
    const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{ //? le pasamos nuestra autorizacion y nuestro ACCESSS KEY
            Authorization:"Client-ID 1nZM-MjBWy4FXom6_v2mg33omFTD-zS1ZTousIEVpoA"
        },
        params:{ //? y aqui le pasamos el parametro que queremos buscar en este caso "CATS"
            query:term //? buscame esto que me llego de parametros
        }
    });
    console.log(response.data.results);
//* con esto hacemos que el padre llame a esta fuction searchImage, luego vamos a buscar las imagenes, y el resultado del arreglo y a ese arreglo le vamos a pasar al hijo para que renderice las imagenes
//? va a recorrer el array y por cada objeto va a generar una imagen
    return response.data.results;
};

export default searchImages;

