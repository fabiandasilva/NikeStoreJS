// ACTIVIDAD 1
// LA TIENDA
// Declarar un clase Tienda que permita registrar:
// Nombre de la tienda.
// Dirección de la tienda.
// Propietario de la tienda.
// Rubro de la tienda.
// Luego invocar al menos tres (3) objetos usando esta clase.
// Notas actividad 1
// Por cada dato a registrar en un objeto, corresponde una propiedad. Recordemos que la invocación del objeto es instanciarlo usando new y el constructor.

// Declarar funcion constructora Tienda
function Tienda(nombre, direccion, propietario, rubro) {
    // Propiedades
    this.nombreTienda = nombre;
    this.direccionTienda = direccion;
    this.propietarioTienda = propietario;
    this.rubroTienda = rubro;

    // Métodos
    this.mostrarDatos = function() {
        alert(`${this.nombreTienda} es del rubro ${this.rubroTienda}, queda en ${this.direccionTienda} y su propietario es ${this.propietarioTienda}.`);
    }
}

const tienda1 = new Tienda('La colosal', 'J.J.Paso 3245', 'Juan Pérez', 'Artículos para el hogar');

console.log(tienda1);

tienda1.mostrarDatos();

// class Tienda2
class Tienda2 {
    constructor(nombre, direccion, propietario, rubro) {
        // Propiedades
        this.nombreTienda = nombre;
        this.direccionTienda = direccion;
        this.propietarioTienda = propietario;
        this.rubroTienda = rubro;        
    }
    // Métodos
    mostrarDatos() {
        console.log(`${this.nombreTienda} es del rubro ${this.rubroTienda}, queda en ${this.direccionTienda} y su propietario es ${this.propietarioTienda}.`);        
    }
}

const tienda2 = new Tienda2('La Favorita', 'Mujica 453', 'Jorge Gauna', 'De todo');

console.log(tienda2);

tienda2.mostrarDatos();

// Objeto literal
const tienda3 = {
    nombreTienda: 'La mejor',
    direccionTienda: 'Avellaneda 333',
    propietarioTienda: 'Pepe Suárez',
    rubroTienda: 'electrodomésticos'
}

console.log(tienda3);





