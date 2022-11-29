// Primer mensaje de página
alert("Bienvenido a Rock Merch N'Roll" )

// Simulador de compra de productos

// Identificación del usuario

const IdentificaciónUsuario = () => {

    let nombreIngresado = "" .toUpperCase;
    let userEmail = "";
    let confirmUserEmail = "";
    let askAgain = true;

    do {
        nombreIngresado = prompt("Ingrese su nombre");

        if (nombreIngresado == ""){
            alert("Vuelva a ingresar su nombre porfavor")
        }else {         askAgain = false;
           }
    } while (askAgain);

    do {
        userEmail = prompt("Ingrese su correo electrónico para enviarle posteriormente todos los detalles de la compra");
        confirmUserEmail = prompt("confirme su correo electrónico");
   
        if (userEmail === confirmUserEmail) {
            alert("Los datos han sido guardados con éxito")
            askAgain = false;
        } else{
            alert("Los correos electronicos deben ser iguales");
            userEmail = prompt("Ingrese nuevamente su correo electrónico:");
            confirmUserEmail = prompt("confirme su correo electrónico:");
       }
   
   } while (askAgain);
}

IdentificaciónUsuario();

// Operación de compra

const operacionCompra = () => {
    let producto = "" .toUpperCase;
    let precio = 0;
    let cantidad = 0;
    let precioTotal = 0;
    let seguirComprando = false;

    do {
        
        producto = prompt("¿Desea comprar remeras, buzos o accesorios?");
        cantidad = parseInt (prompt("Ingrese la cantidad de productos que desea comprar:"));
        
        let cantidadValidada = validarCantidad(cantidad);

        switch(producto){
            case "remeras":
                precio = 2400;
                break
           case "buzos":
                precio = 3400;  
                break
            case "accesorios":
                precio = 1200;
                break
           default:
               alert("El producto no esta en nuestro catálogo");
                precio = 0
                cantidad = 0
                break;
        }   

        precioTotal += precio * cantidadValidada;
        seguirComprando = confirm("¿Querés agregar otro producto?");


    } while (seguirComprando);

    const totalConDescuento = aplicarDescuento(precioTotal);
    const totalConEnvio = calcularEnvio(totalConDescuento);

    return totalConEnvio;
}

// Validar cantidad puesta por el usuario

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0){
        if (cantidad != 0){
            alert("Debe agregar un número.")
        }else{
            alert("Debe agregar una cantidad de producto.")
        }
        cantidad = parseInt(prompt("Ingrese la cantidad de productos que desea comprar:"))
    }
    
    return cantidad;
}; 

// Función para aplicar descuento del 20% al total de la compra si supera los $9000

const aplicarDescuento = (precioTotal) => {

    let totalConDescuento = 0;

    if (precioTotal >= 9000){
        totalConDescuento = precioTotal * 0.80;
        alert("Obtiene un descuento del 20% por superar el valor de $9000")
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

// Función para pagar con Intereses

const calcularIntereses = () => {

    let tasa = 12.3;
    let sinIntereses = 0;
    let tasaTotal = 0;
    let interesesTotales = 0;

    if (cuotas === 1) {
        return sinIntereses;
    }else{
        tasaTotal = tasa + cuotas*0.2
        interesesTotales = tasaTotal * cuotas;
        return interesesTotales;
    }
};

// Función para envío a domicilio

const calcularEnvio = (precioTotal) => {

    let envioDomicilio = false;

    envioDomicilio = confirm("¿Quiere que le enviemos el producto a su domicilio?")

    if (envioDomicilio && precioTotal >= 8000){
        alert("Tenes envío gratis. El total de tu compra es $" + precioTotal );
    } else if(envioDomicilio && precioTotal < 8000 && precioTotal !== 0){
        precioTotal += 600;
        alert("El envío cuesta $500. El total de su cumpra es $" + precioTotal);
    } else {
        alert("El total de tu compra es $" + precioTotal)
    }

    return precioTotal;
}

// Función para calcular el total a pagar

const calcularTotalAPagar = (precioTotal, cuotas, intereses) => {

    precioTotal = (precioTotal + intereses);
    let valorCuota = precioTotal / cuotas;
    alert("El monto final es $"+precioTotal+". Lo pagará en "+cuotas+" cuota/s de $"+valorCuota.toFixed(2))  
    alert("¡GRACIAS "+nombreIngresado+" POR CONFIAR EN NOSOTROS!");
};

const precioTotal = operacionCompra();
const cuotas = calcularCantidadDeCuotas();
const intereses = calcularIntereses(cuotas);

calcularTotalAPagar(precioTotal, cuotas, intereses);