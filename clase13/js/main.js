//!Llamo los elementos que voy a utilizar
$(() => {
    renderizarProductos(productos, contenedorProductos);
    renderizarCarrito(obtenerStorage(), contenedorCarrito);
    document.getElementById("boton").addEventListener("click", guardarDatos);
})
const contenedorProductos = $('#containerProducts')[0],
    contenedorCarrito = $("#containerCart"),
    contenedorFavorito = $("#containerFav");
let nombreCapturado = document.getElementById("nombre").value;


//!Renderizo los producto que tengo en el array
function renderizarProductos(productos, etiqueta) {
    etiqueta.innerHTML = "";
    for (producto of productos) {
        etiqueta.innerHTML += `        
        <div class="col-md-6 col-lg-4 col-xl-3 p-2" id="card">
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
    btnAgregar();
    btnFavorito();
}


//!Renderizo el carrito y agrego las propiedades que le voy a pasar
function renderizarCarrito(cart, container) {
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
            btnQuitar(product.id);
        });
        $("#btnPlus" + product.id).on("click", (e) => {
            product.cantidad++
            guardarStorage(cart)
            renderizarCarrito(cart, container)
        })
        $("#btnMinus" + product.id).on("click", (e) => {
            product.cantidad--
            guardarStorage(cart)
            renderizarCarrito(cart, container)
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
<button type="button" class="btn position-relative" data-bs-toggle="modal"
data-bs-target="#finalizarCompra">Finalizar compra
</button>
`);
}

//!Renderizo la seccion de favorito
function renderizarFavorito(favorite, containter) {
    for (const productos of favorite) {
        containter.append(`
            <div class="text-center">
                <img src="${productos.imagen}" class="imgFav"></a>
                <p class="text-capitalize mt-3 mb-1">${productos.modelo}</p>           
            </div>
        `)
    }

}

//!funciones para guardar y obtener el storage
function guardarStorage(array) {
    localStorage.setItem("carrito", JSON.stringify(array));
}

function obtenerStorage() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
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


//!Agrego el id al storage y renderizo el carrito
//Cambiar nombre agregarProductos
function agregarProductos(id) {
    const arrayCarrito = obtenerStorage();
    const prodSelec = productos.find(e => e.id === id);
    const prodCart = {
        id: prodSelec.id,
        imagen: prodSelec.imagen,
        modelo: prodSelec.modelo,
        precio: prodSelec.precio,
        cantidad: 1
    };

    let index = arrayCarrito.findIndex(e => e.id === id); //busco, si existe, el indice del producto seleccionado
    index == -1 ? arrayCarrito.push(prodCart) : arrayCarrito[index].cantidad++; //agrego el objeto que encontre en el paso antetior
    guardarStorage(arrayCarrito); // guardo el array nuevo dentro del storage
    renderizarCarrito(arrayCarrito, contenedorCarrito) // muestro el array carrito   
};

function agregarFavoritos(id) {
    const arrayCarritoFav = obtenerStorage();
    const prodSelecFav = productos.find(e => e.id === id);
    const prodCartFav = {
        id: prodSelecFav.id,
        imagen: prodSelecFav.imagen,
        modelo: prodSelecFav.modelo,
        precio: prodSelecFav.precio
    };

    let index = arrayCarritoFav.findIndex(e => e.id === id);
    index == -1 ? arrayCarritoFav.push(prodCartFav) :
        guardarStorage(arrayCarritoFav);
    renderizarFavorito(arrayCarritoFav, contenedorFavorito)
}

//!Si el id existe y conincide lo saco del carrito y luego lo renderizo
function btnQuitar(id) {
    const arrayFinal = JSON.parse(localStorage.getItem("carrito")).filter(e => e.id != id);
    guardarStorage(arrayFinal);
    renderizarCarrito(arrayFinal, contenedorCarrito);
}


//!Filtros de categorias
$("#filtroTodos").click((e) => {
    e.preventDefault();
    const filterTodos = productos.filter(e => e.categoria);
    renderizarProductos(filterTodos, contenedorProductos);
});

$("#filtroTraining").click((e) => {
    e.preventDefault();
    const filterTraining = productos.filter(e => e.categoria == "Entrenar");
    renderizarProductos(filterTraining, contenedorProductos);
});

$("#filtroRunning").click((e) => {
    e.preventDefault()
    const filterRunning = productos.filter(e => e.categoria == "Correr");
    renderizarProductos(filterRunning, contenedorProductos);
});

$("#filtroUrban").click((e) => {
    e.preventDefault()
    const filterUrban = productos.filter(e => e.categoria == "Urbano");
    renderizarProductos(filterUrban, contenedorProductos);
});


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


//!Encadenando animaciones
const logo = document.querySelector('.imgLogo');
console.log(logo);

$('.imgLogo').slideUp(2000)
    .delay(2000)
    .slideDown(2000)
    .delay(2000)
    .slideUp(1000)
    .delay(2000)
    .slideDown(2000);