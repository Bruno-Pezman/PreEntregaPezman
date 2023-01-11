document.addEventListener('DOMContentLoaded', () => {
    const url = '../data.stock.json'
    fetch(url)
    .then(res => res.json()) 
    .then(data => pintarProductos(data))

    // if (localStorage.getItem('carrito')) {
    //     // Invoco a las funciones de carrito.js
    //     carrito = obtenerCarritoStorage();
    //     actualizarCarrito(carrito);
    //     actualizarTotalCarrito(carrito);
    // }
});

