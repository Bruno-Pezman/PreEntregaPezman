// Primer mensaje de página
alert("Bienvenido a Rock Merch N'Roll" )

// Simulador de compra de productos

// array de productos
const carrito = [];

// Inicializo la compra preguntando el orden de preferencia del usuario para comprar
const comprar = () => {
    const productosBaratos = confirm ("¿Querés ordenar la lista desde el producto mas barato al mas caro?")

    if (productosBaratos){
        ordenarMenorMayor()
    } else {
        ordenarMayorMenor()
    }
}

// Ordenar productos de menor a mayor precio
const ordenarMenorMayor = () => {
    productos.sort((a,b) => a.precio - b.precio)

    // Inicializo la funcion mostrarProductos
    mostrarProductos();
};

// Ordenar productos de mayor a menor precio
const ordenarMayorMenor = () => {
    productos.sort((a,b) => b.precio - a.precio)

    // Inicializo la funcion mostrarProductos
    mostrarProductos();
};


// Mostrar productos

const mostrarProductos = () => {
    const productosOrdenados = productos.map(productos => {
        return "- "+productos.nombre+" $"+productos.precio
    })

    alert("Lista de precios:"+"\n\n"+productosOrdenados.join("\n"))

    // Inicializo la funcion comprarProductos
    comprarProductos(productosOrdenados);
};

// Funcion para elegir productos para comprar

const comprarProductos = (listaDeProductos) => {
    let seguirComprando = false;
    let productoNombre = "".toLowerCase();
    let productoCantidad = 0;
   
    do {
        
        productoNombre= prompt("¿Que productos desea comprar?"+"\n\n"+"Lista de precios:"+"\n\n"+listaDeProductos.join("\n"))
        productoCantidad = parseInt(prompt("Ingrese la cantidad de productos"))

        // Inicializo validarCantidad
        validarCantidad(productoCantidad);

        const producto = productos.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase())

        if (producto) {
            // Inicializo agregarAlCarrito
            agregarAlCarrito(producto, producto.id, productoCantidad)
        } else {
            alert("El producto no se encuentra en el catálogo")
        }

        
        seguirComprando = confirm("¿Desea agregar otro producto?")
    } while (seguirComprando);
    
    // Inicializo la confirmacion de compra
    confirmarCompra();
};

// Validar cantidad puesta por el usuario

const validarCantidad = (productoCantidad) => {
    while (Number.isNaN(productoCantidad) || productoCantidad === 0){
        if (productoCantidad!= 0){
            alert("Debe agregar un número.")
        }else{
            alert("Debe agregar una cantidad de producto.")
        }
        productoCantidad = parseInt(prompt("Ingrese la cantidad de productos que desea comprar:"))
    }
    
    return productoCantidad;
}; 

// Agregar productos al carrito

const agregarAlCarrito = (producto, productoId, productoCantidad) => {
    const productoRepetido = carrito.find(producto => producto.id === productoId)
    if (productoRepetido){
        productoRepetido.cantidad += productoCantidad
    } else {
        producto.cantidad += productoCantidad
        carrito.push(producto)
    }
};

// Eliminar un producto del carrito

const eliminarProductoCarrito = (productoNombre) => {
    carrito.forEach((producto, index) => {
        if (producto.nombre.toLowerCase === productoNombre.toLowerCase){
            if (producto.cantidad > 1){
                producto.cantidad --
            }else{
                carrito.splice(index, 1)
            }
        }
    })
    // Vuelvo a la confirmación de compra
    confirmarCompra();
}

// Confirmación de compra

const confirmarCompra = () => {
    const listaProductos = carrito.map(productos => {
        return "- "+productos.nombre+" | Cantidad: "+productos.cantidad
    })

    const confirmar = confirm("Confirmación de compra: " 
        +"\n\n"+listaProductos.join("\n")
        +'\n\nPara continuar presione "Aceptar", sino presione "Cancelar" para eliminar productos del carrito.'
    )

    if (confirmar) {
        // Inicializo finalizarCompra
        finalizarCompra(listaProductos);
    } else {
        const productoAEliminar = prompt("Ingrese el nombre del producto a eliminar:")
        // Inicializo elminarProductoCarrito
        eliminarProductoCarrito(productoAEliminar)
    }

};

// Aplicar descuento del 20% si el precio total supera los $20.000

const aplicarDescuento = (precioTotal) => {

    let totalConDescuento = 0;

    if (precioTotal >= 20000){
        totalConDescuento = precioTotal * 0.80;
        alert("Obtiene un descuento del 20% por superar el valor de $20.000")
        return totalConDescuento
    } else {
        return precioTotal;
    }
}

// Función para calcular las Cuotas 

const calcularCantidadDeCuotas = () =>{
    let cuotas = 0;
    let tieneCuotas = false;

    tieneCuotas = confirm("¿Queres pagar en cuotas?");

    if (tieneCuotas) {
        cuotas = parseInt(prompt("¿En cuantas cuotas queres pagar?"))
        if (cuotas === 0){
            cuotas = 1;
        } else if(Number.isNaN(cuotas)){
            calcularCantidadDeCuotas();
        }
     } else {
        cuotas = 1;
    }

    return cuotas; 
};

// Función para envío a domicilio

const calcularEnvio = (precioTotal) => {

   let envioDomicilio = false;

    envioDomicilio = confirm("¿Quiere que le enviemos el producto a su domicilio?")

    if (envioDomicilio && precioTotal >= 10000){
        alert("Tenes envío gratis. El total de tu compra es $" + precioTotal );
    } else if(envioDomicilio && precioTotal < 10000 && precioTotal !== 0){
        precioTotal += 600;
        alert("El envío cuesta $600. El total de su cumpra es $" + precioTotal);
    } else {
        alert("El total de tu compra es $" + precioTotal)
    }

    return precioTotal;
}

// Finalizar la compra

const finalizarCompra = (listaProductos) => {
    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const precioTotal = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)
    const totalConDescuento = aplicarDescuento(precioTotal);
    const totalConEnvio = calcularEnvio(totalConDescuento);
    cuotas = calcularCantidadDeCuotas();
    const valorCuota = totalConEnvio / cuotas

    alert("Detalle de su compra:"
        +"\n\n"+listaProductos.join("\n")
        +"\n\nTotal de productos: "+cantidadTotal
        +"\n\nEl total de la compra es: $"+totalConEnvio
        +"\n\nLo pagará en "+cuotas+" cuota/s de $"+valorCuota.toFixed(2) 
        +"\n\nGracias por confiar en nosotros!"
    )
}

comprar();