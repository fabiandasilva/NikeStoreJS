//Pedir un texto mediante prompt, concatenar un valor en cada repeticion, realizando una salida por cada resultado, hasta que se ingresa ESC

let entrada = prompt("Ingresa una palabra...");
let salida = "";

while (entrada != "ESC") {
    
  salida = salida + " " + entrada;

  alert("El usuario ingreso:" + salida);
  
  entrada = prompt("Ingresa una palabra...");  
}




