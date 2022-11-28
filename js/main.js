// Primer mensaje de página
alert("Bienvenido a Rock Merch N'Roll" )

// Simulador de compra de productos

// Variables inicializadas 
let nombreIngresado = "" .toUpperCase;
let userEmail = "";
let confirmUserEmail = "";
let askAgain = true;
let producto = "" .toUpperCase;
let precio = 0;
let cantidad = 0;
let precioTotal = 0;
let cantidadTotal = 0;
let seguirComprando = false;

// Funciones 
const multiplicacion = (a,b) => a * b ;
const suma = (a,b) => a + b ;

// Identificación del usuario
do {
    nombreIngresado = prompt("Ingrese su nombre");

    if (nombreIngresado == ""){
        alert("Vuelva a ingresar su nombre porfavor")
    }else {
        askAgain = false;
    }

} while (askAgain);

do {
    userEmail = prompt("Ingrese su correo electrónico para enviarle posteriormente todos los detalles de la compra");
    confirmUserEmail = prompt("confirme su correo electrónico");

    if (userEmail === confirmUserEmail) {
        alert("Los datos han sido guardados con éxito")
        askAgain = false;
    }else{
        alert("Los correos electronicos deben ser iguales");
        userEmail = prompt("Ingrese nuevamente su correo electrónico");
        confirmUserEmail = prompt("confirme su correo electrónico");
    }

} while (askAgain);


// Operación de compra
do {
    producto = prompt("¿Desea comprar remeras, buzos o accesorios?");
    
    switch(producto){
        case "remeras":
            precio = 2500;
            cantidad = parseInt (prompt("Ingrese cantidad de productos que desea comprar"));
            break
        case "buzos":
            precio = 4000;
            cantidad = parseInt (prompt("Ingrese cantidad de productos que desea comprar"));
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

    precioTotal += multiplicacion (precio, cantidad);
    cantidadTotal += cantidad;
    seguirComprando = confirm("¿Desea seguir comprando?");

} while (seguirComprando);

// Detalles de la compra
alert("Compraste "+cantidadTotal+" productos y el total de su compra es "+precioTotal);
alert("Gracias "+nombreIngresado+" por confiar en nosotros");