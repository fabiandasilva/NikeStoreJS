//!Llamo los elementos que voy a utilizar
const contenedorProductos = document.getElementById('card-group');
const contenedorCarrito = document.getElementById('contenedor-carrito');
const contenedorProductosCarrito = document.getElementById('contenedor-productos-carrito');


//!Creo arrays para ir cargandolo
const productos = [];
let carrito = [];


const producto1 = new Producto(1, "./img/running/Epic_React__Flyknit_2/imagen1.jpg", "Correr", "Nike Air Zoom Pegasus 38", 18000);
const producto2 = new Producto(2, "./img/running/Nike_ Air_ Zoom_Pegasus_ 38/imagen1.jpg", "Correr", "Nike Epic React Flyknit 2", 18000);
const producto3 = new Producto(3, "./img/running/Nike_Joyride_Dual_Run/imagen1.jpg", "Correr", "Nike Renew Run 2", 14728);
const producto4 = new Producto(4, "./img/running/Nike_Renew_Run_2/imagen1.jpg", "Correr", "Nike Joyride Dual Run", 24728);
const producto5 = new Producto(5, "./img/running/Nike_Revolution_5/imagen1.jpg", "Correr", "Nike Revolution 5", 30000);

const producto6 = new Producto(6, "./img/training/Nike_air_Max_Bella_trainning_4/imagen1.jpg", "Entrenar", "Nike Air Max Bella Training 4", 30000);
const producto7 = new Producto(7, "./img/training/Nike_city_trainer/imagen1.jpg", "Entrenar", "Nike City Trainer", 32000);
const producto8 = new Producto(8, "./img/training/Nike_In-Season-Tr_9/imagen1.jpg", "Entrenar", "Nike In-Season Tr-9", 42000);
const producto9 = new Producto(9, "./img/training/Nike_legend_Essentia_2/imagen1.jpg", "Entrenar", "Nike legend Essential 2", 42000);
const producto10 = new Producto(10, "./img/training/Nike_Superrep_Go/imagen1.jpg", "Entrenar", "Nike Superrep Go", 52000);

const producto11 = new Producto(11, "./img/urban/Jordan_air_max_200/imagen1.jpg", "Urbano", "Nike Jordan air max 200", 35000);
const producto12 = new Producto(12, "./img/urban/Nike_Air_Max_90/imagen1.jpg", "Urbano", "Nike Jordan air max 90", 35000);
const producto13 = new Producto(13, "./img/urban/Nike_Court_Legacy/imagen1.jpg", "Urbano", "Nike Court Legacy", 33000);
const producto14 = new Producto(14, "./img/urban/Nike_Crater_impact/imagen1.jpg", "Urbano", "Nike Crater impact", 35000);
const producto15 = new Producto(15, "./img/urban/Nike_Wearallday/imagen1.jpg", "Urbano", "Nike Wearallday", 42000);

productos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15);


//!Utilizo la funcion para ver lo que hay en el Storage
if (ObtenerStorage('carrito')) {
    carrito = ObtenerStorage('carrito');
    renderizarCarrito(contenedorProductosCarrito, carrito);
} else {
    console.log('No hay nada en el carrito');
}


//!Renderizo los Productos
renderizarProductos(contenedorProductos, productos);


//!Creo una funcion para ir agregando al carrito
function agregarAlCarrito(event) {
    /* Mensaje de producto agregado al carrito */
    Swal.fire({
        icon: 'success',
        title: 'Producto Agregado',
        timer: 700
    })
    console.log(event.target.id);
    const idProductoElegido = (event.target.id);

    //!Matcheo con el id
    if (productos.some(producto => producto.id === parseInt(idProductoElegido))) {

        if (carrito.some(producto => producto.id === parseInt(idProductoElegido))) {
            const productoElegido = carrito.find(producto => producto.id === parseInt(idProductoElegido));
            productoElegido.cantidad++;
            GuardarStorage('carrito', carrito);
        } else {
            const productoElegido = productos.find(producto => producto.id === parseInt(idProductoElegido));
            const producto = new Carrito(productoElegido.id, productoElegido.modelo, productoElegido.precio, 1);
            carrito.push(producto);
            GuardarStorage('carrito', carrito);
        }
        //!Renderizo los productos para mostrarlos en el carrito
        carrito = ObtenerStorage('carrito');
        renderizarCarrito(contenedorProductosCarrito, carrito);
    } else {
        alert('Elija un producto valido');
    }
}


//!Renderizo los productos seleccionados al carrito
function renderizarCarrito(contenedor, array) {
    let precioTotal = 0;
    //!Limpio todo 
    contenedor.innerHTML = "";
    array.forEach(producto => {
        contenedor.innerHTML += `                 
            <div class="row shoppingCartItem" id="contenedor-productos-carrito">
        <div class="col-6">
            <div
                class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img class="shopping-cart-image">
                <h6
                    class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">
                   ${producto.modelo}
                </h6>
            </div>
        </div>
        <div class="col-2">
            <div
                class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${producto.precio}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="ml-4 mb-0 shoppingCartCount">${producto.cantidad}</p>
                <button class="btn btn-danger" id="buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>
    `;
    });


    //!Realizo la suma y cantidad para determinar el precio
    array.forEach(producto => precioTotal += producto.precio * producto.cantidad);
    contenedor.innerHTML += `<div class="row">
    <div class="col-12">
        <div class="shopping-cart-total d-flex align-items-center">
            <p class="mb-0">Total:  $${precioTotal} </p>
            <div class="toast ml-auto bg-info" role="alert" aria-live="assertive"
                aria-atomic="true" data-delay="2000">
            </div>
            <button class="btn btn-success ml-auto comprarButton" type="button"
                data-toggle="modal" data-target="#comprarModal"id="finalizarCompra">Finalizar compra</button>
        </div>
    </div>
</div>`
}


const finalizarCompra = document.getElementById('finalizarCompra');
finalizarCompra.addEventListener('click', finalizarCompraRespuesta);

function finalizarCompraRespuesta(events) {
    Swal.fire({
        icon: 'success',
        title: 'Gracias por su compra',
        text: 'Pronto recibira su pedido',
        timer: 2000
    })
}