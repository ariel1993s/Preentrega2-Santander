let nombre = prompt("Por favor, ingresa tu nombre:");
let edad = parseInt(prompt("Hola, " + nombre + ". Por favor, ingresa tu edad:"));

if (edad >= 18) {
    alert("¡Bienvenido, " + nombre + "!\n\nOfrecemos los siguientes artículos:\n- Remeras: $2500 cada una\n- Buzos: $4000 cada uno\n- Pantalones: $5000 cada uno");

    let compra = [];
    let articulo;
    let cantidad;
    let precioTotal = 0;

    do {
        articulo = prompt("Ingresa el artículo que deseas comprar, o escribe 'salir' si no deseas agregar más artículos:");

        if (articulo !== "salir") {
            cantidad = parseInt(prompt("¿Cuántas unidades deseas comprar de este artículo?"));

            let precioUnitario;
            switch (articulo.toLowerCase()) {
                case "remeras":
                    precioUnitario = 2500;
                    break;
                case "buzos":
                    precioUnitario = 4000;
                    break;
                case "pantalones":
                    precioUnitario = 5000;
                    break;
                default:
                    alert("El artículo ingresado no tiene un precio predefinido.");
                    console.log("El artículo ingresado no tiene un precio predefinido.");
                    continue;
            }

            let subtotal = cantidad * precioUnitario;

            let nuevacompra = {
                articulo: articulo,
                cantidad: cantidad,
                precioUnitario: precioUnitario,
                subtotal: subtotal
            };

            compra.push(nuevacompra);

            precioTotal += subtotal;
        }

    } while (articulo !== "salir");

    console.log("Resumen de la compra:");
    compra.forEach(item => {
        console.log(`${item.cantidad} ${item.articulo} - Precio unitario: ${item.precioUnitario} - Subtotal: ${item.subtotal}`);
    });

    console.log("Precio total a pagar: " + precioTotal);

   console.log (compra)

    alert("¡Gracias por tu compra, " + nombre + "! Esperamos verte de nuevo pronto.");

} else {
    alert("Lo siento, " + nombre + ", pero debes ser mayor de 18 años para acceder a esta página.");
}
