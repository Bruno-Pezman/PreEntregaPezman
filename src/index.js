document.addEventListener('DOMContentLoaded', () => {
    pintarProductos();

    if (localStorage.getItem('carrito')) {
        // Invoco a las funciones de carrito.js
        carrito = obtenerCarritoStorage();
        actualizarCarrito(carrito);
        actualizarTotalCarrito(carrito);
    }
});

