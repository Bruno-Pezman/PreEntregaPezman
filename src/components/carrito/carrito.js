// array de productos
let carrito = [];

const productosDestacados = document.getElementById('productosDestacados');

productosDestacados.addEventListener('click', (e) => {
    if (e.target.classList.contains('agregar')) {
        validarProductoRepetido(e.target.id)
    }
});

// Validar la repetición de productos
const validarProductoRepetido = (productoId) => {
    const productoRepetido = carrito.find(producto => producto.id == productoId);

    if (!productoRepetido) {
        const producto = productos.find(producto => producto.id == productoId);
        carrito.push(producto);
        pintarProductoCarrito(producto);
        guardarCarritoStorage(carrito);
        actualizarTotalCarrito(carrito);
    } else {
        productoRepetido.cantidad++
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`);
        cantidadProducto.innerText = `Cantidad: ${productoRepetido.cantidad}`
        actualizarTotalCarrito(carrito);
    }
};

// Mostrar los productos dentro del carrito
const pintarProductoCarrito = (producto) => {
    const carritoContenedor = document.getElementById('carrito-contenedor');
    const div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `
    <p>${producto.nombre}</p>
    <p>Precio: ${producto.precio}</p>
    <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
    <button class="btn waves-effect waves-ligth boton-eliminar" value="${producto.id}">X</button>
    `
    carritoContenedor.appendChild(div);

};

// Eliminar productos del carrito
const eliminarProductoCarrito = (productoId) => {
    const productoIndex = carrito.findIndex(producto => producto.id == productoId);
    carrito.splice(productoIndex, 1);
    actualizarCarrito(carrito);
    actualizarTotalCarrito(carrito);
};

//Actualizar los productos dentro del carrito
const actualizarCarrito = (carrito) => {
    const contenedor = document.getElementById('carrito-contenedor');

    contenedor.innerHTML = '';

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML += `
            <p>${producto.nombre}</p>
            <p>Precio: ${producto.precio}</p>
            <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
            <button class="btn waves-effect waves-ligth boton-eliminar" value="${producto.id}">X</button>
        `
        contenedor.appendChild(div);
    });
};

// Storage de productos 
const guardarCarritoStorage = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
};

const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    return carritoStorage;
};

// Actualizar el total de la compra
const actualizarTotalCarrito = (carrito) => {
    const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const totalCompra = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

    pintarTotalCarrito(totalCantidad, totalCompra);
    guardarCarritoStorage(carrito);
};

// Mostrar el precio total de la compra
const pintarTotalCarrito = (totalCantidad, totalCompra) => {
    const contadorCarrito = document.getElementById('contador-carrito');
    const precioTotal = document.getElementById('precioTotal');
    console.log(contadorCarrito, precioTotal)

    contadorCarrito.innerText = totalCantidad;
    precioTotal.innerText = totalCompra;
};