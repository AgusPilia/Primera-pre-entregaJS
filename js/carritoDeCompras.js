
const productos = [
    { nombre: 'Producto 1', precio: 10 },
    { nombre: 'Producto 2', precio: 20 },
    { nombre: 'Producto 3', precio: 30 }
];


function agregarProducto(carrito, producto) {
    carrito.push(producto);
    console.log(`El ${producto.nombre} fue agregado al carrito.`);
}


function calcularTotal(carrito) {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }
    return total;
}


const carrito = [];


agregarProducto(carrito, productos[0]);
agregarProducto(carrito, productos[1]);
agregarProducto(carrito, productos[2]);


console.log(`Productos en el carrito: ${carrito.length}`);


const total = calcularTotal(carrito);
console.log(`Total de la compra: $${total}`);
