document.addEventListener('DOMContentLoaded', () => {
    fetch('../data/stock.json')
    .then(res => res.json()) 
    .then(data => pintarProductos(data))

    // if (localStorage.getItem('carrito')) {
    //     // Invoco a las funciones de carrito.js
    //     carrito = obtenerCarritoStorage();
    //     actualizarCarrito(carrito);
    //     actualizarTotalCarrito(carrito);
    // }
});

