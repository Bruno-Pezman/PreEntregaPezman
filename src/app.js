const url = '../data/stock.json'
    fetch(url)
    .then(res => res.json()) 
    .then(data => pintarProductos(data))
    
// Pintar productos en el shop
const pintarProductos = (data) => { 
    const productosDestacados = document.getElementById('productosDestacados');    
    
    data.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('product', 'text-center', 'col-lg-3', 'col-md-4', 'col-12');
        div.innerHTML += `         
            <img id="${producto.id}" class="img-fluid mb-3" src="${producto.img}" alt="${producto.descripcion}"> 
            <div class="star">
                <i class='bx bxs-star warning' ></i>
                <i class='bx bxs-star warning' ></i>
                <i class='bx bxs-star warning' ></i>
                <i class='bx bxs-star warning' ></i>
                <i class='bx bxs-star warning' ></i>
            </div>
            <h5 class="product-name">${producto.nombre}</h5>
            <h4 class="product price">$${producto.precio}</h4>
        
            <button id="${producto.id}" class="buy-btn bx bx-cart-add bx-sm agregar"></button>
        `
        productosDestacados.appendChild(div);

    })    

  
};

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
        
        
    } else {
        // Aumentar la cantidad de un producto que ya se encuentre en el carrito
        productoRepetido.cantidad++
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`);
        cantidadProducto.innerText = `Cantidad: ${productoRepetido.cantidad}`
       
    }
};