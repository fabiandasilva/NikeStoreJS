//Pedir un texto mediante prompt, concatenar un valor en cada repeticion, realizando una salida por cada resultado, hasta que se ingresa ESC

let pedirTexto = prompt("Ingresa una palabra ");

while (pedirTexto != "ESC") {
    
  alert("El usuario ingreso " + pedirTexto);

  pedirTexto = (pedirTexto + " " + prompt("Ingresa otra palabra"));
}
