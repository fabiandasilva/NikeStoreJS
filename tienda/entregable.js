//* Calcular el costo total de productos y/o servicios seleccionados por el usuario

let valorNike = 17000;
let valorAdidas = 13000;
let valorReebok = 14000;
let total = 0;

function AcumularTotal(valorProducto) {
  total = total + valorProducto;
}

function choiseProduct() {
  let select = prompt("Seleccione un producto:\n nike \n adidas \n reebok");
  let guardar = "";

  while (select != "finalizar") {

    switch (select) {

      case "nike":
        AcumularTotal(valorNike);
        alert("👟 vale: " + valorNike);
        break;
        
      case "adidas":
        AcumularTotal(valorAdidas);
        alert("👞 vale: " + valorAdidas);
        break;

      case "reebok":
        AcumularTotal(valorReebok);
        alert("👟 vale: " + valorReebok);
        break;

      default:
        /* El usuario ingreso algo no valido */
        break;
        
    }

    guardar = guardar + "\n" + select;

    alert("Seleccionaste:\n " + guardar + "\nTotal: " + total);

    select = prompt(
      "Selecciona otro producto o escribi finalizar para terminar la compra \n nike \n adidas \n reebok"
    );
  }
}

choiseProduct();
