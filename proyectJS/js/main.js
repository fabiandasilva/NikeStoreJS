let nombreCapturado = document.getElementById("nombre").value;
let correoCapturado = document.getElementById("correo").value;

$(() => {
    renderProducts(productos, contenedorProductos);
    renderCart(getStorage(), contenedorCarrito);
})

const contenedorProductos = document.getElementById("containerProducts");
const contenedorCarrito = $("#containerCart");

function renderProducts(productos, etiqueta) {
    etiqueta.innerHTML = "";
    for (producto of productos) {
        etiqueta.innerHTML += `        
        <div class="col-md-6 col-lg-4 col-xl-3 p-2">
        <div class="special-img position-relative overflow-hidden">
            <img src="${producto.imagen}" class="w-100"></a>
        </div>
        <div class="text-center">
            <p class="text-capitalize mt-3 mb-1">${producto.modelo}</p>
            <span class="fw-bold d-block">${producto.precio}</span>
            <button class="agregar btn btn-primary mt-3" id="btnAdd${producto.id}">Agregar</button>
            <button class="favorito btn btn-primary mt-3" id="btnFav${producto.id}"><i class="fa fa-heart"></i></button>
        </div>
    </div>
       `
    };
    capturaBotonAgregar();
};
//!Renderizo el carrito y agrego las propiedades que le voy a pasar
function renderCart(cart, container) {
    let totalCompra = 0;
    let totalUnidades = 0;
    container.html("");
    for (const product of cart) {
        totalCompra += product.precio * product.cantidad;
        container.prepend(`
        <div class="container">
        <div class="row shoppingCartItem" id="contenedor-productos-carrito">
        <div class="col-6">
            <div
                class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img class="shopping-cart-image">
                <h6
                    class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">
                   ${product.modelo}
                </h6>
            </div>
        </div>
        <div class="col-2">
            <div
                class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">$ ${product.precio}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
              
                <span id="btnMinus${product.id}" class="badge rounded-pill bg-secondary">-</span>      ${product.cantidad}     <span id="btnPlus${product.id}" class="badge rounded-pill bg-secondary">+</span>
                <span id="btnDel${product.id}" class="quitar badge bg-danger">X</span>
            </div>
        </div>
    </div>    
</div>`);

        $("#btnDel" + product.id).on("click", (e) => {
            quitar(product.id);
        });
        $("#btnPlus" + product.id).on("click", () => {
            product.cantidad++
            setStorage(cart)
            renderCart(cart, container)
        })
        $("#btnMinus" + product.id).on("click", () => {
            product.cantidad--
            setStorage(cart)
            renderCart(cart, container)
        })
    }
    cart.map(e => totalUnidades += e.cantidad)
    container.append(`
    <div class="col-12">
    <div class="shopping-cart-total d-flex align-items-center">
    <br>
    </div>
    <h5 class="mb-0">Total ${totalCompra}</h5>    
    <br>    
    <h5 class="mb-0">Cantidad ${totalUnidades}</h5>    
    <a href="#"><button class="btn btn-success ml-auto comprarButton" type="button"
    data-toggle="modal" data-target="#comprarModal"id="finalizarCompra">Finalizar compra</button>    </a>
</div>`);
}

function setStorage(array) {
    localStorage.setItem("carrito", JSON.stringify(array));
}

function getStorage() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function capturaBotonAgregar() {

    const botones = document.getElementsByClassName("agregar");
    for (const boton of botones) {
        boton.addEventListener("click", (e) => {
            agregar((e.target.id).substring(6))
            //!Alert de producto agregado
            Swal.fire({
                icon: 'success',
                title: 'Producto Agregado',
                timer: 800
            })
        });

    };
};



function agregar(id) { //cuando invocas la funcion dentro del evento le pasas el id que te llego
    const arrayCarrito = getStorage(); // asignacion condicional, se asigna el localStorage si existe o sino un array vacio
    const prodSelec = productos.find(e => e.id === id); //busco el objeto cuya propiedad coincida con el id capturado por el evento y le agrego un propiedad cantidad
    const prodCart = {
        id: prodSelec.id,
        modelo: prodSelec.modelo,
        precio: prodSelec.precio,
        cantidad: 1
    };
    let index = arrayCarrito.findIndex(e => e.id === id); //busco, si existe, el indice del producto seleccionado
    index == -1 ? arrayCarrito.push(prodCart) : arrayCarrito[index].cantidad++; //agrego el objeto que encontre en el paso antetior
    setStorage(arrayCarrito); // guardo el array nuevo dentro del storage
    renderCart(arrayCarrito, contenedorCarrito) // muestro el array carrito, en este punto podria crear un nuevo render tipo tabla, por ej
};

function quitar(id) {
    const arrayFinal = JSON.parse(localStorage.getItem("carrito")).filter(e => e.id != id);
    setStorage(arrayFinal);
    renderCart(arrayFinal, contenedorCarrito);
}

$("#filtroTodos").click((e) => {
    e.preventDefault();
    const filterTodos = productos.filter(e => e.categoria == "Training", "Running", "Urban");
    renderProducts(filterTodos, contenedorProductos);
});
$("#filtroTraining").click((e) => {
    e.preventDefault();
    const filterTraining = productos.filter(e => e.categoria == "Training");
    renderProducts(filterTraining, contenedorProductos);
});

$("#filtroRunning").click((e) => {
    e.preventDefault()
    const filterRunning = productos.filter(e => e.categoria == "Running");
    renderProducts(filterRunning, contenedorProductos);
});

$("#filtroUrban").click((e) => {
    e.preventDefault()
    const filterUrban = productos.filter(e => e.categoria == "Urban");
    renderProducts(filterUrban, contenedorProductos);
});


function GuardarDatos() {
    function NewUsers(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }
    usuarios = new NewUsers(nombreCapturado, correoCapturado);
    cargarDatos();
    mostrarDatos();

}

let ArrayDatos = [];

function cargarDatos() {
    ArrayDatos.push(usuarios);
    console.log(ArrayDatos);
}

function mostrarDatos() {
    const dataName = document.getElementById("dataName")
    let span = document.createElement('span');
    dataName.appendChild(span);

    
    span.innerHTML =  document.getElementById("nombre").value;
    span.setAttribute('class', 'myclass');
}


document.getElementById("boton").addEventListener("click", GuardarDatos);