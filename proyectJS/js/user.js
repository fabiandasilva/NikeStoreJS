//!Simulacion de registro de usario
class User {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

usuario = new User(nombreCapturado);

function guardarDatos() {
    ArrayDatos = [];
    ArrayDatos.push(usuario);
    const dataName = document.getElementById("dataName")
    let span = document.createElement('span');
    dataName.appendChild(span);
    span.innerHTML = document.getElementById("nombre").value;
}
guardarDatos();