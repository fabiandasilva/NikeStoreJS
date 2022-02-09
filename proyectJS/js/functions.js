//!Si el id existe y conincide lo saco del carrito y luego lo renderizo
function btnQuitar(id) {
    const arrayFinal = JSON.parse(localStorage.getItem("carrito")).filter(e => e.id != id);
    guardarStorage(arrayFinal);
    renderizarCarrito(arrayFinal, contenedorCarrito);
    localStorage.clear(arrayFinal)
}




//!Capturo el boton agregar 
function btnAgregar() {
    const botones = document.querySelectorAll(".agregar");
    for (const boton of botones) {
        boton.addEventListener("click", (e) => {
            agregarProductos((e.target.id).substring(6))
            //!Alert de producto agregado
            Swal.fire({
                icon: 'success',
                title: 'Producto Agregado',
                timer: 800
            })
        });

    };
};


//!Capturo el boton favorito 
function btnFavorito() {
    const btns = document.querySelectorAll(".favorito");
    for (const btn of btns) {
        btn.addEventListener("click", (e) => {
            agregarFavoritos((e.target.id).substring(6))
            //!Alert de producto agregado
            Swal.fire({
                title: 'Favorito',
                timer: 800
            })
        });

    };
};


//!funciones para guardar y obtener el storage
function guardarStorage(array) {
    localStorage.setItem("carrito", JSON.stringify(array));
}


function obtenerStorage() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarDatos() {
    ArrayDatos = [];
    ArrayDatos.push(usuario);
    const dataName = document.getElementById("dataName")
    let span = document.createElement('span');
    dataName.appendChild(span);
    span.innerHTML = document.getElementById("nombre").value;
}
guardarDatos();