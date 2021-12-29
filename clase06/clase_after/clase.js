//!Ejemplo de ingresar datos y que se corte hasta la cantidad ingresada

/* const listNames = [];
let quantity = 4;

do {
  let entry = prompt('Ingrese un producto');

  listNames.push(entry);

  console.log(listNames.length);
  
} while (listNames.length !=quantity);

alert(listNames); */

//!Ejemplo de posiciones

/* let team =['Juan','Pedro','Ana', 'maria'];

for (let index = 0; index < team.length; index++) {
  alert("Posicion "+ (index + 1) + ": "+ team[index]);
  
} */

//!Ejemplo de cargar un arreglo vacio y cargarlo de manera dinamica

/* let entry =prompt("Ingresa su nombre");
let names =[];

while (entry.toLowerCase () != 'esc') {

  names.push(entry);

  entry=prompt('Ingrese otro nombre')
}

for (let index = 0; index < names.length; index++) {

  alert("Posicion "+ (index + 1) + ": "+ names[index]);
  
} */

//!Ejemplo de agregar datos dinamicamente

/* class jugador{
  constructor(nombre, dorsal,goles){
    this.nombre=nombre;
    this.dorsal=dorsal;
    this.goles= goles;
  }

}

let team=[];

team.push(new jugador('Juan',1,10));
team.push(new jugador('Pedro',2,5));
team.push(new jugador('Maria',3,3));
team.push(new jugador('Pablo',3,3));

console.log(team);
 */

//!Ejemplo de impimir informacion del array

/* const movies = [
  { id: 1, name: "spiderman", year: 2018 },
  { id: 2, name: "Avengers", year: 2018 },
  { id: 3, name: "IronMan", year: 2018 },
  { id: 4, name: "Captain America", year: 2018 },
];

for (const movie of movies){
  alert(movie.id+' - '+ movie.name + ' - ' + movie.year)
} */

//!Ejemplo de como Sumas el iva dinamicamente usando un objeto y array
/* class Producto {
  constructor(categoria, modelo, talle, precio) {
    this.categoria = categoria;
    this.modelo = modelo;
    this.talle = talle;
    this.precio = precio;
  
  }

  sumarIva() {
    this.precio = this.precio * 1.21;
  }
}

let products = [];

products.push(new Producto("Camisa", 100, 10));
products.push(new Producto("Pantalon", 200, 10));
products.push(new Producto("Zapatos", 300, 10));

for (let index = 0; index < products.length; index++) {
  products[index].sumarIva()
}

console.log(products); */

//! Ejemplo de Buscador con filter o find

/* let names = ["ANA", "FLORENCIA", "FABIAN", "AGUSTIN", "JUAN"];

console.log(names.find(name => name.toLowerCase() == 'juan')); */

//!Metodo Map

/* let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(numbers.map((number) => number * 3));
 */

//!Ejercicio integrador con array y filters

/* let products = [
  { id: 1, name: "Camisa", price: 100, quantity: 10 },
  { id: 2, name: "Pantalon", price: 200, quantity: 10 },
  { id: 3, name: "Short", price: 300, quantity: 10 },
  { id: 4, name: "Zapato", price: 400, quantity: 10 },
];
//?Busca un producto y devuelve el primero que encuentra
console.log(products.find((producto) => producto.id == 2));
//?Busca un producto y devuelve todas las coincidencias 
console.log(products.filter((product) => product.price > 200));
//?Modifica el array
console.log(products.map((producto) => (producto.price += 50)));
 */



//!Ejercicio de buscar a un jugador

/* class Productos {
  constructor(categoria, modelo, talle, precio) {
    //*Propiedades
    this.categoria = categoria;
    this.modelo = modelo;
    this.talle = talle;
    this.precio = precio;
  }

  //*Agrego un metodo para sumar el IVA
  sumarIva(){
    this.precio=this.precio*1.21;
  }
}

let team = [];
team.push(new Productos("Correr","Nike Air Zoom Pegasus 38",42,18.000));

function buscaJugador(team, name) {
  return team.find(player => player== name);
}

for (let index = 0; index < 3; index++) {

  let busqueda = buscaJugador(team, prompt('Ingrese su nombre'));

  if (busqueda != undefined) {

    alert('Lista de modelos ' + busqueda);

  } else {
    alert('No se encontro al jugador');
  }
}
 */