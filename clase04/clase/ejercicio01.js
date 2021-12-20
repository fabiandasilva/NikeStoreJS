//*Crear una funcion que tome un numero ingresado por el usuario, calcucle su cuadrado y lo muestre por pantalla

function pedirNumero() {
    const numero = parseInt(prompt('Ingrese un número entero para calcular su cuadrado'));
    return numero
}

function calcularCuadrado(numero) {
    if (!isNaN(numero)) {
        let cuadrado = Math.pow(numero, 2);
        document.write('El cuadrado de ' + numero + ' es ' + cuadrado);
    }  else {
        alert('Ingrese un número entero');
    }
}
const numero = pedirNumero();
calcularCuadrado(numero);