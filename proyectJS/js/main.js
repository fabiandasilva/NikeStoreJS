//*Simulo que el usuario finaliza la compra
alert("Registrate antes de finalizar la compra");

//*Capturo los datos
class NewUser {
    constructor(nombre, apellido, telefono, correo) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.telefono = telefono;
            this.correo = correo;
        } *
        //*Defino propiedad para mostrar los datos
        mostrarDatos() {
            console.log(`Los datos cargados fueron: \n${this.nombre}\n${this.apellido}\n${this.telefono}\n${this.correo}`)
            alert("Registro exitoso!")
        }
}

const nombre = prompt('Nombre: ')
const apellido = prompt('Apellido: ')
const telefono = prompt('Telefono: ')
const correo = prompt('Correo: ')
const user = new NewUser(nombre, apellido, telefono, correo)

console.log(user)

user.mostrarDatos();

//*Defino el modelo para luego cargar los datos /*  */
class Producto {
    constructor(categoria, modelo, talle, precio) {
            this.categoria = categoria;
            this.modelo = modelo;
            this.talle = talle;
            this.precio = precio;
        }
        //*Agrego una propiedad para sumar el iva a los productos
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
}

//*Defino el arreglo 
let arrayProductos = [];

arrayProductos.push(new Producto("Correr", "Nike Air Zoom Pegasus 38", 42, 18000));

arrayProductos.push(new Producto("Correr", "Epic React Flyknit 2", 42, 18000));

arrayProductos.push(new Producto("Correr", "Nike Joyride Dual Run", 42, 24728));

arrayProductos.push(new Producto("Correr", "Nike Renew Run 2", 42, 14728));

arrayProductos.push(new Producto("Correr", "Nike Revolution 5", 42, 30000));

arrayProductos.push(new Producto("Entrenar", "Nike Air Max Bella Training 4", 42, 30000));

arrayProductos.push(new Producto("Entrenar", "Nike City Trainer", 42, 32000));

arrayProductos.push(new Producto("Entrenar", "Nike In-Season Tr-9", 42, 42000));

arrayProductos.push(new Producto("Entrenar", "Nike legend Essential 2", 42, 42000));

arrayProductos.push(new Producto("Entrenar", "Nike Superrep Go", 42, 52000));

arrayProductos.push(new Producto("Urbano", "Nike Jordan air max 200", 42, 35000));

arrayProductos.push(new Producto("Urbano", "Nike Jordan air max 90", 42, 35000));

arrayProductos.push(new Producto("Urbano", "Nike Court Legacy", 42, 33000));

arrayProductos.push(new Producto("Urbano", "Nike Crater impact", 42, 35000));

arrayProductos.push(new Producto("Urbano", "Nike Wearallday", 42, Math.round(32000)));

//*Utilizo un for para recorrer el arreglo e ir sumando el iva
for (let index = 0; index < arrayProductos.length; index++) {
    arrayProductos[index].sumarIva();
}

let indexProductoSeleccionado = 2;

let cost = 0;

let cantidad = parseInt(prompt("Su producto elegido fue:" + "\n" + "Categoria: " + arrayProductos[indexProductoSeleccionado].categoria + "\n" + "Modelo: " + arrayProductos[indexProductoSeleccionado].modelo + "\n" + "Talle: " + arrayProductos[indexProductoSeleccionado].talle + "\nPrecio: $" + arrayProductos[indexProductoSeleccionado].precio + "\nIngrese cantidad que desea comprar"));

cost = cost + (cantidad * arrayProductos[indexProductoSeleccionado].precio);

alert("El costo total fue de: $" + Math.round(cost));