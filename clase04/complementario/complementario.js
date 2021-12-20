

function pedirNumero() {
  let numero = Number(prompt("Ingrese un valor para agregarle IVA 🤑"));
  return numero;
}
function iva(valor) {
  alert("El valor ingresado es " + valor);
  valor = valor * (21 / 100) + valor;
  return valor;
}
function resultado(result) {
  alert("Con el iva agregado queda en: " + result+ "💸");
}
resultado(iva(pedirNumero()));
