// Pintar productos

const pintarProductos = () => { 
    const productosDestacados = document.getElementById('productosDestacados');

    productos.forEach( producto => {

        // Div con los productos a comprar
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
        
            <button id="${producto.id}" class="buy-btn agregar"><i class='bx bx-cart-add bx-sm'></i></button>
        `
        productosDestacados.appendChild(div);

    })    
};