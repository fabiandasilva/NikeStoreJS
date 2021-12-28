

//!Defino el producto
class Running {
  constructor(categoria, modelo, talle, precio) {
    //*Propiedades
    this.categoria = categoria;
    this.modelo = modelo;
    this.talle = talle;
    this.precio = precio;

  }
  //*Agrego un metodo para que muestre los datos del producto seleccionado
  datos() {
    console.log(`Categoria: \n${this.categoria}El modelo elegido es: \n${this.modelo}\nSu talle es: ${this.talle}\nSu precio es: ${this.precio}`);
  }
}
const Air = new Running(
  
  "Running",
  "Nike Air Zoom Pegasus 38",
  "42",
  17.728
)
  
console.log(Air);
Air.datos();

let cost = 0;

//!Aca Muestro el total

let cantidad = parseInt(prompt("Su producto elegido fue:"+"\n"+"Modelo: "+Air.modelo+"\nPrecio: $"+Air.precio+"\nIngrese cantidad"));

cost = cost + (cantidad*Air.precio)
alert("costo total: "+ cost)







