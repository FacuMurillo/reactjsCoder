


export const fetchProductsByCategory = async (categoryId) => {
    const productos = {
        monitores: [
            { id: 1, name: "Monitor LG 24''" },
            { id: 2, name: "Monitor Samsung 27''" },
            { id: 3, name: "Monitor Hitachi 19''" },
        ],
        placas: [
            { id: 4, name: "Placa NVIDIA GTX 1660" },
            { id: 5, name: "Placa AMD Radeon RX 580 8GB" },
            { id: 6, name: "Placa GeForce RTX 3050 8Gb" },
        ],
    };
    return new Promise((resolve) => {
        setTimeout(() => resolve(productos[categoryId] || []), 500);
    });
};

export const fetchProductDetail = async (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({
            id: itemId,
            nombre: `Producto ${itemId}`,
            descripcion: "Descripción del producto...",
            precio: 100 + parseInt(itemId) * 100,
        }), 500);
    });
};