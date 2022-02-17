//Llamo los elementos que voy a utilizar
$(() => {
    renderizarCarrito(obtenerStorage(), contenedorCarrito);
})
const contenedorProductos = $('#containerProducts')[0];
const contenedorCarrito = $("#containerCart");
const contenedorFavorito = $("#containerFav");
const URLproductos = 'js/productos.JSON';
let nombreCapturado = document.getElementById("nombre").value;


//Llamo el JSON con el get para cargar mis productos
let productos = "";
$.getJSON(URLproductos, function (arrayObjeto) {
    productos = arrayObjeto;
    localStorage.setItem("productos", JSON.stringify(productos));
    renderizarProductos(arrayObjeto, contenedorProductos);
})


//funciones para guardar y obtener el storage del cart
function guardarStorage(array) {
    localStorage.setItem("carrito", JSON.stringify(array));
}

function obtenerStorage() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}


//Renderizo los producto que tengo en el array
function renderizarProductos(productos, etiqueta) {
    etiqueta.innerHTML = "";
    for (producto of productos) {
        etiqueta.innerHTML += `        
                    <div class="col-md-6 col-lg-4 col-xl-3 p-2" id="card">
                    <div class="special-img position-relative overflow-hidden">
                        <img src="${producto.imagen}" class="w-100"></a>
                    </div>
                    <div class="text-center">
                    <div class="rating mt-3">
                        <span class="text-primary"><i class="fas fa-star"></i></span>
                        <span class="text-primary"><i class="fas fa-star"></i></span>
                        <span class="text-primary"><i class="fas fa-star"></i></span>
                        <span class="text-primary"><i class="fas fa-star"></i></span>
                    </div>
                        <p class="text-capitalize mt-3 mb-1">${producto.modelo}</p>
                        <span class="fw-bold d-block">${producto.precio}</span>
                        <button class="agregar btn btn-primary mt-3" id="btnAdd${producto.id}">Agregar al carrito</button>
                        <button class="favorito btn btn-primary mt-3" id="btnFav${producto.id}"><i class="fa fa-heart"></i></button>
                    </div>
                </div>
                   `
    };
    btnAgregar();
    btnFavorito();
}


//Renderizo el carrito y agrego las propiedades que le voy a pasar
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
              
                <span id="btnMinus${product.id}" class="badge rounded-pill bg-secondary cursor">-</span>      ${product.cantidad}     <span id="btnPlus${product.id}" class="badge rounded-pill bg-secondary cursor">+</span>
               
                <span class="quitar badge bg-danger"></span>
                <span class="btn btn-primary mt-3" id="btnDel${product.id}"><i class="fa fa-trash"></i></span>
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
            if (product.cantidad > 1) {
                product.cantidad--
            }
            guardarStorage(cart)
            renderizarCarrito(cart, container)
        })

    } // end foreach prod

    cart.map(e => totalUnidades)
    container.append(`
    <div class="col-12">
        <div class="shopping-cart-total d-flex justify-content-between p-5">
            <br>
            <div>

                <button type="button" class="btn position-relative" id="btnVaciar">Vaciar Carrito</button>

                <button type="button" class="btn position-relative" data-bs-toggle="modal"
                    data-bs-target="#finalizarCompra">Finalizar compra
                </button>
            </div>
            <div>        
            <span class="colorTotal">Total: $${totalCompra}</span>
            </div>
        </div>
`);

    $("#btnVaciar").on("click", (e) => {
        btnVaciar();
    });

    totalUnidadesIcono(obtenerStorage());
}
//Capturo el boton agregar 
function btnAgregar() {
    const botones = document.querySelectorAll(".agregar");
    for (const boton of botones) {
        boton.addEventListener("click", (e) => {
            agregarProductos((e.target.id).substring(6))
            //Alert de producto agregado
            Swal.fire({
                icon: 'success',
                title: 'Producto Agregado',
                timer: 800
            })
        });

    };
};


//Agrego el id al storage y renderizo el carrito
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

//Si el id existe y conincide lo saco del carrito y luego lo renderizo
function btnQuitar(id) {
    const arrayFinal = JSON.parse(localStorage.getItem("carrito")).filter(e => e.id != id);
    guardarStorage(arrayFinal);
    renderizarCarrito(arrayFinal, contenedorCarrito);
}


//Vacio el carrito y localStorage
function btnVaciar() {
    $("#containerCart").html("");
    localStorage.clear("carrito");
    localStorage.clear("favorito");
    totalUnidadesIcono(obtenerStorage());
}

//Contador de unidades de producto
function totalUnidadesIcono(array) {
    let totalUnidades = 0;
    array.forEach(productos => totalUnidades += productos.cantidad);
    $('.cart-quantity').html(totalUnidades);
}


//capturo el boton comprar y confirmo la compra 
function comprarBtn() {
    $("#btnComprar").on("click", (e) => {
        btnComprar_Click();
    });
}
comprarBtn();

function btnComprar_Click() {
    if (EstaFormularioCompleto() === true) {
        limpiarFormulario();
        btnVaciar();

        Swal.fire({
            title: 'Compra Realizada',
            text: 'Te contactaremos en la brevedad',
            timer: '1100'
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Completa tus datos',
            timer: '900'
        })
    }
}



