import lg24 from '../assets/monitorlg24.png';
import samsung27 from '../assets/monitorsamsung27.jpg';
import asus21 from '../assets/monitorasus21.png';

import gtx from '../assets/gtx1660.png';
import rtx from '../assets/rtx3050.png';
import rx from '../assets/rx580.png';
export const fetchProductsByCategory = async (categoryId) => {
    const productos = {
        monitores: [
            { id: 1, name: "Monitor LG 24''", precio: 380000, image: lg24},
            { id: 2, name: "Monitor Samsung 27''", precio: 530000, image: samsung27},
            { id: 3, name: "Monitor Asus 21''", precio: 130000, image: asus21},
        ],
        placas: [
            { id: 4, name: "Placa NVIDIA GTX 1660", precio: 400000, image: gtx },
            { id: 5, name: "Placa AMD Radeon RX 580 8GB", precio: 285000, image: rx },
            { id: 6, name: "Placa GeForce RTX 3050 8Gb", precio: 510000, image: rtx },
        ],
    };
    return new Promise((resolve) => {
        setTimeout(() => resolve(productos[categoryId] || []), 500);
    });
};

export const fetchProductDetail = async (itemId) => {
    const productosDetalles = {
        1: { id: 1, name: "Monitor LG 24''", precio: 380000, image: lg24},
        2: { id: 2, name: "Monitor Samsung 27''", precio: 530000, image: samsung27},
        3: { id: 3, name: "Monitor Asus 21''", precio: 130000, image: asus21 },
        4: { id: 4, name: "Placa NVIDIA GTX 1660", precio: 400000, image: gtx},
        5: { id: 5, name: "Placa AMD Radeon RX 580 8GB", precio: 285000, image: rx },
        6: { id: 6, name: "Placa GeForce RTX 3050 8Gb", precio: 510000, image: rtx },
    };

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productosDetalles[itemId] || { id: itemId, name: `Producto ${itemId}`, precio: 0, image: "" });
        }, 500);
    });
};
