// Instanciar una nueva tienda a partir de la class Tienda a partir de datos ingresados por el usuario.

class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        // Propiedades
        this.nombreTienda = nombre;
        this.direccionTienda = direccion;
        this.propietarioTienda = propietario;
        this.rubroTienda = rubro; 
        this.abierto = false;       
    }
    // Métodos
    mostrarDatos() {
        console.log(`${this.nombreTienda} es del rubro ${this.rubroTienda}, queda en ${this.direccionTienda} y su propietario es ${this.propietarioTienda}.`);        
    }
    abrir() {
        this.abierto = true;
    }
    mostrarMensaje() {
        if (this.abierto) {
            alert('La tienda está abierta');
        } else {
            alert('La tienda está cerrada');
        }
    }
}

const nombreTienda = prompt('Ingrese el nombre de la tienda');
const direccionTienda = prompt('Ingrese la dirección de la tienda');
const propietarioTienda = prompt('Ingrese el nombre del propietario de la tienda');
const rubroTienda = prompt('Ingrese el rubro de la tienda');

const tienda = new Tienda(nombreTienda, direccionTienda, propietarioTienda, rubroTienda);

console.log(tienda);

tienda.mostrarDatos();

tienda.abrir();
console.log(tienda.abierto);
tienda.mostrarMensaje();



