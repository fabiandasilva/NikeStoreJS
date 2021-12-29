//!Defino la estructura para cargar los productos

class Productos {
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
//*Cargo los productos
let cargarProductos =[];

cargarProductos.push(new Productos("Correr","Nike Air Zoom Pegasus 38",42,18.000));

cargarProductos.push(new Productos("Correr","Epic React Flyknit 2",42,18.000));

cargarProductos.push(new Productos("Correr","Nike Joyride Dual Run",42,24.728));

cargarProductos.push(new Productos("Correr","Nike Renew Run 2",42,14.728));

cargarProductos.push(new Productos("Correr","Nike Revolution 5",42,30.000));

cargarProductos.push(new Productos("Entrenar","Nike Air Max Bella Training 4",42,30.000));

cargarProductos.push(new Productos("Entrenar","Nike City Trainer",42,32.000));

cargarProductos.push(new Productos("Entrenar","Nike In-Season Tr-9",42,42.000));

cargarProductos.push(new Productos("Entrenar","Nike legend Essential 2",42,42.000));

cargarProductos.push(new Productos("Entrenar","Nike Superrep Go",42,52.000));

cargarProductos.push(new Productos("Urbano","Nike Jordan air max 200",42,35.000));

cargarProductos.push(new Productos("Urbano","Nike Jordan air max 90",42,35.000));

cargarProductos.push(new Productos("Urbano","Nike Court Legacy",42,33.000));

cargarProductos.push(new Productos("Urbano","Nike Crater impact",42,35.000));

cargarProductos.push(new Productos("Urbano","Nike Wearallday",42,32.000));


for (let index = 0; index < cargarProductos.length; index++) {
  cargarProductos[index].sumarIva()
  
}
//*Busco con filter precios menor a 32.000 
console.log(cargarProductos.filter((product) => product.precio< 32.000));


//*Muestro todos los productos cargados en la consola
console.log(cargarProductos)


