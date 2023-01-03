document.addEventListener('DOMContentLoaded', () => {
    pintarProductos();

    if (localStorage.getItem('carrito')) {
        // Invoco a las funciones de carrito.js
        carrito = obtenerCarritoStorage();
        console.log(carrito)
        actualizarCarrito(carrito);
        actualizarTotalCarrito(carrito);
    }
});

