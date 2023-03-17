
const carrito = [];
let total = 0;


function agregarProducto(nombre, precio) {
    const cantidad = prompt(`Ingrese la cantidad de ${nombre}:`);

    if (cantidad && !isNaN(cantidad)) {
        const item = {
            nombre: nombre,
            precio: precio,
            cantidad: parseInt(cantidad)
        };

        carrito.push(item);

        actualizarCarrito();
    } else {
        alert("La cantidad ingresada no es válida.");
    }
}

function actualizarCarrito() {
    const carritoElemento = document.getElementById("carrito");
    carritoElemento.innerHTML = "";

    // Reiniciar total a cero
    total = 0;

    carrito.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio} - Cantidad: ${item.cantidad}`;
        carritoElemento.appendChild(li);

        total += item.precio * item.cantidad;
    });

    const totalElemento = document.getElementById("total");
    totalElemento.textContent = total;
}

// Efectuar una salida
actualizarCarrito();
