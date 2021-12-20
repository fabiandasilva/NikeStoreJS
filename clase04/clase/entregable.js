//* Calcular el costo total de productos y/o servicios seleccionados por el usuario

//!Aca selecciono el producto
let valorUno = 200;
let valorDos = 300;
let valorTres = 400;
function choiseProduct() {
  let select = prompt("Seleccione un producto:\n cafe \n factura \n galletita");
  let guardar = "";
  while (select != "finalizar") {
    switch (select) {
      case "cafe":
        alert("☕ vale: " + valorUno);
        break;
      case "factura":
        alert("🥐 vale: " + valorDos);
        break;
      case "galletita":
        alert("🍪 vale: " + valorTres);
        break;

      default:
        break;
    }
    guardar = guardar + " " + select;

    alert("Seleccionaste: " + select);

    select = prompt("Selecciona otro producto o escribi finalizar para terminar la compra \n cafe \n factura \n galletita");
  }
}
choiseProduct();

