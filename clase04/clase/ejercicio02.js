// Crear una función que muestre un saludo por consola a dos personas que ingrese el usuario

saludar(pedirNombre(), pedirNombre());

function pedirNombre() {
    const nombre = prompt('Ingrese el nombre de un/a amigo/a');
    if (isNaN(nombre) && nombre !== '') {
        return nombre;
    } else {
        alert('Ingrese un nombre válido');
    }   
}

function saludar(persona1, persona2) { 
    alert(`Hola ${persona1} y ${persona2}`);
}