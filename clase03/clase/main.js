//Incremento en for
/* for (let i = 1; i <= 10; i++) {
  if (i == 10) {
    alert("Aca termina tu ciclo");
    break;
  }
  alert(i);
}
 */

//El pizzarron
/* let number = prompt("Ingrese un numero");
let message = prompt("Ingrese un mensaje");

for (let i = 1; i <= number; i++) {
  alert(i + ". " + message);
}
 */
//!Cuadrado ordinario
/* let number = prompt("Ingrese un nomero de lados");

for (let i = 1; i < number; i++) {
  alert("Lado " + i);
  if (i == 4) {
    break;
  }
} */

//!Registro de alumnos
/* let estudiantes = ' ';

for (let i = 1; i <= 5; i++) {
  estudiantes += prompt("Ingrese el nombre del alumno  " + i)+ "\n";
}
alert(estudiantes);
 */
//!Practica while
/* let entrada = prompt("Ingresar un nombre ");

while (entrada != "ESC") {
    switch (entrada) {
    case "ANA":
        alert("Hola Ana");
        break;
    case "JUAN":
        alert("Hola Juan");
        break;
    default:
        alert("¿Quien sos?");
        break;
    }
    entrada = prompt("Ingresar un nombre ");
}
 */

//**El inombrable!//
/* let nombre = prompt("Ingresa tu nombre");
let nombres = '';
while (nombre != "voldermort") {
  nombres += nombre + "\n";

  nombre = prompt("Ingresa tu nombre");
}
alert(nombre);
 */

//*Comprando productos*//

let number = prompt("Ingresa un numero del 1 al 5");

while (number != "ESC") {

    switch(number){
    case "1":
        alert("Tomate");
        break

    case "2":
        alert("Papa");
        break

    case "3":
        alert("Uva");
        break

    case "4":
        alert("Mango");
        break

    case "5":
        alert("Pera");
        break
    }
    number = prompt("Ingresa un numero del 1 al 4");
}