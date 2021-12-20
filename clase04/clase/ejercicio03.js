// ACTIVIDAD 1
// ENTRADAS Y SALIDAS
// Codificar tres funciones:
// Una función entrada(), la cual solicite un valor al usuario y lo retorne.
// Una función procesamiento(valor), donde se transforme la entrada.
// Una función salida(valor), la cual mostrará el resultado por alerta.
// Luego, invocar las tres funciones.
// Notas actividad 1
// La actividad propone agrupar en funciones las instrucciones de 1) entrada. 2) procesamiento, y 3) salida. La llamada de las funciones debe coincidir con dicho orden.
pedirValor();

const pedirValor = () => {
  const valor = prompt('Ingrese un valor numerico');
  console.log(valor);
  return valor;
};

const duplicar = numero => numero *2;

const mostrarResultado = numero => alert(`Ek resuktadi es ${numero}`);

mostrarResultado(duplicar(pedirValor()));