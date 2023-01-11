// array de productos
let carrito = [];

const productosDestacados = document.getElementById('productosDestacados');

// Identificar por ID el producto a comprar
productosDestacados.addEventListener('click', (e) => {
    if (e.target.classList.contains('agregar')) {
        validarProductoRepetido(e.target.id)
    }
});

// Validar que un producto esté repetido
const validarProductoRepetido = (productoId) => {
    const productoRepetido = carrito.find(producto => producto.id == productoId);

    if (!productoRepetido) {
        // Agregar los productos al carrito que no esten repetidos
        const producto = data.find(producto => producto.id == productoId);
        carrito.push(producto);
        pintarProductoCarrito(producto);
        guardarCarritoStorage(carrito);
        actualizarTotalCarrito(carrito);
    } else {
        // Aumentar la cantidad de un producto que ya se encuentre en el carrito
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
    <p class="py-3">${producto.nombre}</p>
    <p class="py-3">Precio: $${producto.precio}</p>
    <p class="py-3" id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
    <button id="btn-eliminar" class="pb-4 btn waves-effect waves-ligth boton-eliminar bx bx-x" value="${producto.id}"></button>
    `
    carritoContenedor.appendChild(div);

    div.addEventListener('click', alertaProductoEliminado);
};

// Eliminar productos del carrito
const eliminarProductoCarrito = (productoId) => {
    const productoIndex = carrito.findIndex(producto => producto.id == productoId);
    carrito.splice(productoIndex, 1);
    actualizarCarrito(carrito);
    actualizarTotalCarrito(carrito);

};

// Alerta cada vez que elimino un producto
const alertaProductoEliminado = () => {
    
    Toastify({
        text: "Producto eliminado!",
        duration: 1500,
        offset: {
            x: 20,
            y: 100 
        },
        style: {
            background: 'rgb(245, 146, 109)',
            color: 'white',
        }
    }).showToast();   
};

// Actualizar los productos dentro del carrito
const actualizarCarrito = (carrito) => {
    const contenedor = document.getElementById('carrito-contenedor');

    contenedor.innerHTML = '';

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML += `
            <p class="py-3">${producto.nombre}</p>
            <p class="py-3">Precio: ${producto.precio}</p>
            <p class="py-3" id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
            <button id="btn-eliminar" class="pb-4 btn waves-effect waves-ligth boton-eliminar bx bx-x" value="${producto.id}"></button>
        `
        contenedor.appendChild(div);

        div.addEventListener('click', alertaProductoEliminado);
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

// Actualizar el total de productos en el carrito
const actualizarTotalCarrito = (carrito) => {
    const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const totalCompra = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

    pintarTotalCarrito(totalCantidad, totalCompra);
    guardarCarritoStorage(carrito);
};

// Mostrar la cantidad y el precio total de la compra
const pintarTotalCarrito = (totalCantidad, totalCompra) => {
    const contadorCarrito = document.getElementById('contador-carrito');
    const precioTotal = document.getElementById('precioTotal');

    contadorCarrito.innerText = totalCantidad;
    precioTotal.innerText = totalCompra;
}; 