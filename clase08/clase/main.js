class Producto {
    constructor(id, categoria, modelo, precio) {

        this.id = id;
        this.categoria = categoria;
        this.modelo = modelo;
        this.precio = precio;
    }
    mostrarDatos() {
        alert(`Usted eligio el producto: ${this.modelo} que cuesta $${this.precio}`);
    }
}

class Carrito {
    constructor(id, categoria, modelo, precio, cantidad) {
        this.id = id;
        this.categoria = categoria;
        this.modelo = modelo;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
//! Creo funciones para interactuar con el localStorage
guardarStorage = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor));
};

obtenerStorage = (clave) => {
    const valor = JSON.parse(localStorage.getItem(clave));
    return valor;
};

const productos = [];
let carrito = [];
let carritoDescripcion = "";

if (obtenerStorage('carrito')) {
    carrito = obtenerStorage('carrito');
    carrito.forEach(producto => carritoDescripcion += `${ producto.modelo} - ${producto.cantidad} \n`);
    alert(carritoDescripcion)
}else{
    alert('El carrito esta vacio');
}

const producto1 = new Producto(1, "Correr", "Nike Air Zoom Pegasus 38", 18000);
const producto2 = new Producto(2, "Correr", "Nike Epic React Flyknit 2", 18000);
const producto3 = new Producto(3, "Correr", "Nike Renew Run 2", 14728);
const producto4 = new Producto(4, "Correr", "Nike Joyride Dual Run", 24728);
const producto5 = new Producto(5, "Correr", "Nike Revolution 5", 30000);

const producto6 = new Producto(6, "Entrenar", "Nike Air Max Bella Training 4", 30000);
const producto7 = new Producto(7, "Entrenar", "Nike City Trainer", 32000);
const producto8 = new Producto(8, "Entrenar", "Nike In-Season Tr-9", 42000);
const producto9 = new Producto(9, "Entrenar", "Nike legend Essential 2", 42000);
const producto10 = new Producto(10, "Entrenar", "Nike Superrep Go", 52000);

const producto11 = new Producto(11, "Urbano", "Nike Jordan air max 200", 35000);
const producto12 = new Producto(12, "Urbano", "Nike Jordan air max 90", 35000);
const producto13 = new Producto(13, "Urbano", "Nike Court Legacy", 33000);
const producto14 = new Producto(14, "Urbano", "Nike Crater impact", 35000);
const producto15 = new Producto(15, "Urbano", "Nike Wearallday", 32000);


productos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15);

console.log(productos);


//!Pido la eleccion de un producto para luego hacer match con su ID
let idProductoElegido;

let precioTotal = 0;


do {
    idProductoElegido = prompt(`Elija un munero de producto que desea comprar:
    1 - Nike Air Zoom Pegasus 38
    2 - Nike Epic React Flyknit 2
    3 - Nike Renew Run 2
    4 - Nike Joyride Dual Run
    5 - Nike Revolution 5
    6 - Nike Air Max Bella Training 4
    7 - Nike City Trainer
    8 - Nike In-Season Tr-9
    9 - Nike legend Essential 2
    10 - Nike Superrep Go
    11 - Nike Jordan air max 200
    12 - Nike Jordan air max 90
    13 - Nike Court Legacy
    14 - Nike Crater impact
    15 - Nike Wearallday`);
    console.log(idProductoElegido);


    //!Matcheo el id ingresado con el producto correspondiente a ese id

    //*Con el primer if saco el alert del else (Ingrese un producto valido)
    if (idProductoElegido !== '.') {

        if (productos.some(producto => producto.id === parseInt(idProductoElegido))) {
            if (carrito.some(producto => producto.id === parseInt(idProductoElegido))) {
                //*Si el producto existe me agrega al carrito
                const productoElegido = carrito.find(producto => producto.id === parseInt(idProductoElegido));
                productoElegido.cantidad++;
                guardarStorage('carrito', carrito);
            } else {
                const productoElegido = productos.find(producto => producto.id === parseInt(idProductoElegido));
                const producto = new Carrito(productoElegido.id, productoElegido.categoria, productoElegido.modelo, productoElegido.precio, 1);
                carrito.push(producto);
            }
        } else {
            alert('Ingrese un numero de producto valido');
        }
    }
} while (idProductoElegido !== '.');

console.log(carrito);

//! Realizo la suma del producto y la cantidad elegida
carrito.forEach(producto => precioTotal += producto.precio * producto.cantidad);

console.log(`Precio total: ${precioTotal}`);