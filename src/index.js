document.addEventListener('DOMContentLoaded', () => {
    pintarProductos(productos);

    if (localStorage.getItem('carrito')) {
        // Invoco a las funciones de carrito.js
        carrito = obtenerCarritoStorage();
        actualizarCarrito(carrito);
        actualizarTotalCarrito(carrito);
    }
});

