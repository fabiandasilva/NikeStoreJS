//*Defino el modelo para luego cargar los datos 
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


//*Defino varibles para luego utilizar el precio de los productos 
let indexProductoSeleccionado1 = 1;
let indexProductoSeleccionado2 = 2;
let indexProductoSeleccionado3 = 3;

let ProductoUno = arrayProductos[indexProductoSeleccionado1].precio;
let ProductoDos = arrayProductos[indexProductoSeleccionado2].precio;
let ProductoTres = arrayProductos[indexProductoSeleccionado3].precio;
let total = 0;


//*Utilizo una funcion para poder guardar el valor e ir acumulando
function AcumularTotal(valorProducto) {
    total = total + valorProducto;
}


//*Defino una funcion para elegir el producto 
function choiseProduct() {
    let select = prompt("Seleccione un producto sorpresa 🎁🎁🎁:\n 01 \n 02 \n 03");
    let guardar = "";

    while (select != "COMPRAR") {

        switch (select) {

            case "01":
                AcumularTotal(ProductoUno);
                alert("Su producto elegido fue:" + "\n" + "Categoria: " + arrayProductos[indexProductoSeleccionado1].categoria + "\n" + "Modelo: " + arrayProductos[indexProductoSeleccionado1].modelo + "\n" + "Talle: " + arrayProductos[indexProductoSeleccionado1].talle + "\nPrecio: $" + ProductoUno);

                break;

            case "02":
                AcumularTotal(ProductoDos);
                alert("Su producto elegido fue:" + "\n" + "Categoria: " + arrayProductos[indexProductoSeleccionado2].categoria + "\n" + "Modelo: " + arrayProductos[indexProductoSeleccionado2].modelo + "\n" + "Talle: " + arrayProductos[indexProductoSeleccionado2].talle + "\nPrecio: $" + ProductoDos);
                break;

            case "03":
                AcumularTotal(ProductoTres);
                alert("Su producto elegido fue:" + "\n" + "Categoria: " + arrayProductos[indexProductoSeleccionado3].categoria + "\n" + "Modelo: " + arrayProductos[indexProductoSeleccionado3].modelo + "\n" + "Talle: " + arrayProductos[indexProductoSeleccionado3].talle + "\nPrecio: $" + ProductoTres);
                break;

            default:
                alert("Por favor selecciona uno de los productos")
                break;
        }
        guardar = guardar + "\n" + select;

        alert("Seleccionaste 🥳🥳🥳:\n " + guardar + "\nTotal: " + Math.round(total));

        select = prompt(
            "Selecciona otro producto o escribi COMPRAR para finalizar \n 01 \n 02 \n 03"
        );
    }
}
choiseProduct();


//*Simulo que el usuario finaliza la compra
alert("Registrate antes de finalizar la compra");


//*Capturo los datos de registro
class NewUser {
    constructor(nombre, apellido, telefono, correo) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.telefono = telefono;
            this.correo = correo;
        } *
        //*Defino propiedad para mostrar los datos por consola
        mostrarDatos() {
            console.log(`Los datos cargados fueron: \n${this.nombre}\n${this.apellido}\n${this.telefono}\n${this.correo}`);

        }
}


const nombre = prompt('Nombre: ');
const apellido = prompt('Apellido: ');
const telefono = prompt('Telefono: ');
const correo = prompt('Correo: ');
const user = new NewUser(nombre, apellido, telefono, correo);

console.log(user);

user.mostrarDatos();

alert("Registro exitoso!");