
import { useEffect, useState } from "react"; //? importamos los hooks 
import { useParams } from "react-router-dom";  //? importamos el hook para obtener las url
import { fetchProductDetail } from "../components/api";
import Swal from 'sweetalert2';




function ItemDetailContainer() {

//? extraemos la url usando useParams
    const { id } = useParams(); 

    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const cargarProducto = async () => {
            Swal.fire({
                title: 'Cargando...',
                text: 'Por favor, espera mientras se obtienen los datos.',
                didOpen: () => {
                    Swal.showLoading(); 
                }
            });
            try{
                const producto = await fetchProductDetail(id);
                setProducto(producto);
            } catch (error) {
                console.error("Error al cargar el producto:", error);
            } finally {
                Swal.close();
            }
        };

        cargarProducto();
    }, [id]);
   

//? necesitamos manejar el estado de carga de datos, ojo es importante mostrar al usuario que este "cargando"
    if (!producto) return <div>Cargando...</div>
    ;

    return (
        <div className="contenedorProducto">
            <h2>Detalle de Producto</h2>
            <p>ID: {producto.id}</p>
            <p>Nombre: {producto.nombre}</p>
            <p>Descripción: {producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
        </div>
    );
}

export default ItemDetailContainer;