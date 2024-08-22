
//* Sincrocino y Asincronico

//? Sincronico vendria a ser los scrips que se hacen en orden y estan definididos 
//? Asincronicos son los que tarden un tiempo en ejecutarse y se muestran al finalizar todos los sincronicos
//* CHATGPT: En resumen, sincrónico significa que las operaciones se ejecutan una tras otra en el orden en que están escritas, mientras que asincrónico permite que otras partes del código se ejecuten mientras una operación está en curso, manejando su resultado más adelante.

console.log("Inicio"); //? esto es sincronico

setTimeout(function(){console.log("Mitad")}, 3000); //? Asincronico tarda 3seg en aparecer o hasta que terminen todos los scrips sincronicos

console.log("Fin"); //? estos son sincronicos
console.log("Fin");
console.log("Fin");
console.log("Fin");
console.log("Fin");

//* PROMESAS O PROMISES 

let carrito = [];

//?                              function ejecutor = es la que se encarga de generar la respuesta - normalmente esta en el backend
let agregarCarrito = new Promise(function(resolve, reject){

    setTimeout( function(){
        let tiempoCarga = Math.random();

        if(tiempoCarga < 0.5){
            carrito.push("Producto");
            resolve(carrito);
        }
        else{
            reject("No se pudo cargar el carrito");
        }
    }, 2000)

});
console.log( agregarCarrito ); //? si ponemos esto la promesa estara en pending porque estamos tratando de ejecutar una promesa con un proceso sincronico 

agregarCarrito
        //? el then es determinar que si se cumplio
            .then(function(carrito){
                console.log("Se cumplio");
                console.log(carrito);
            })
        //? el catch es para determinar que hubo un error
            .catch(function(error){
                console.log(error);
            })

//* MAP
//? es un metodo del ARRAY, recorre el arreglo y te devuelve un nuevo arreglo (retorna un nuevo arreglo)

//? ejemplo: tenemos un array de productos y le pedimos un nuevo array con el precio de los productos + IVA entonces llamamos a MAP y la funcion que agrege el iva

let productos = [
    {nombre:"TV",precio:332000},
    {nombre:"Mouse" ,precio:27000},
    {nombre:"Lampara" ,precio:15000},
    {nombre:"Teclado" ,precio:50000},
    {nombre:"Mate" ,precio:5000},
];

function agregarIva( producto ){

    let iva = producto.precio * 0.21;

    return {
        nombre:producto.nombre,
        precio:producto.precio+iva
    }
}

let resultado = productos.map( agregarIva );

console.log(resultado);