
// Pintar productos en el shop
const pintarProductos = async () => { 
    const productosDestacados = document.getElementById('productosDestacados');    

    const resp = await fetch('../src/components/data/stock.json')
    const data = await resp.json()
    console.log(data)
    
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

