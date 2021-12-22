//* Calcular el costo total de productos y/o servicios seleccionados por el usuario

let valorCafe = 200;
let valorFactura = 300;
let valorGalletita = 400;
let total = 0;

function AcumularTotal(valorProducto) {
  total = total + valorProducto;
}

function choiseProduct() {
  let select = prompt("Seleccione un producto:\n cafe \n factura \n galletita");
  let guardar = "";

  while (select != "finalizar") {

    switch (select) {

      case "cafe":
        AcumularTotal(valorCafe);
        alert("☕ vale: " + valorCafe);
        break;
      case "factura":
        AcumularTotal(valorFactura);
        alert("🥐 vale: " + valorFactura);
        break;
      case "galletita":
        AcumularTotal(valorGalletita);
        alert("🍪 vale: " + valorGalletita);
        break;
      default:
        /* El usuario ingreso algo no valido */
        break;
        
    }

    guardar = guardar + "\n" + select;

    alert("Seleccionaste:\n " + guardar + "\nTotal: " + total);

    select = prompt(
      "Selecciona otro producto o escribi finalizar para terminar la compra \n cafe \n factura \n galletita"
    );
  }
}

choiseProduct();
