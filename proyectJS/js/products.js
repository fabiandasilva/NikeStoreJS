//!Defino los productos 
class Producto {
    constructor(id, imagen, categoria, modelo, precio) {
        this.id = id;
        this.imagen = imagen;
        this.categoria = categoria;
        this.modelo = modelo;
        this.precio = precio;
    }
}

const productos = [];


const producto1 = new Producto("1", "./img/running/Epic_React__Flyknit_2/imagen1.jpg", "Correr", "Nike Air Zoom Pegasus 38", 18000);
const producto2 = new Producto("2", "./img/running/Nike_ Air_ Zoom_Pegasus_ 38/imagen1.jpg", "Correr", "Nike Epic React Flyknit 2", 18000);
const producto3 = new Producto("3", "./img/running/Nike_Joyride_Dual_Run/imagen1.jpg", "Correr", "Nike Renew Run 2", 14728);
const producto4 = new Producto("4", "./img/running/Nike_Renew_Run_2/imagen1.jpg", "Correr", "Nike Joyride Dual Run", 24728);
const producto5 = new Producto("5", "./img/running/Nike_Revolution_5/imagen1.jpg", "Correr", "Nike Revolution 5", 30000);
const producto6 = new Producto("6", "./img/training/Nike_air_Max_Bella_trainning_4/imagen1.jpg", "Entrenar", "Nike Air Max Bella Training 4", 30000);
const producto7 = new Producto("7", "./img/training/Nike_city_trainer/imagen1.jpg", "Entrenar", "Nike City Trainer", 32000);
const producto8 = new Producto("8", "./img/training/Nike_In-Season-Tr_9/imagen1.jpg", "Entrenar", "Nike In-Season Tr-9", 42000);
const producto9 = new Producto("9", "./img/training/Nike_legend_Essentia_2/imagen1.jpg", "Entrenar", "Nike legend Essential 2", 42000);
const producto10 = new Producto("10", "../img/training/Nike_Superrep_Go/imagen1.jpg", "Entrenar", "Nike Superrep Go", 52000);

const producto11 = new Producto("11", "../img/urban/Jordan_air_max_200/imagen1.jpg", "Urbano", "Nike Jordan air max 200", 35000);
const producto12 = new Producto("12", "../img/urban/Nike_Air_Max_90/imagen1.jpg", "Urbano", "Nike Jordan air max 90", 35000);
const producto13 = new Producto("13", "../img/urban/Nike_Court_Legacy/imagen1.jpg", "Urbano", "Nike Court Legacy", 33000);
const producto14 = new Producto("14", "../img/urban/Nike_Crater_impact/imagen1.jpg", "Urbano", "Nike Crater impact", 35000);
const producto15 = new Producto("15", "../img/urban/Nike_Wearallday/imagen1.jpg", "Urbano", "Nike Wearallday", 42000);

productos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15);

//!Ver JSON
//!Ver Tarjeta