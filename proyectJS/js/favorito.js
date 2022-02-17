//Funciones para guardar y obtener el storage de favoritos
function guardarStorageFavoritos(array) {
    localStorage.setItem("favoritos", JSON.stringify(array));
}

function obtenerStorageFavoritos() {
    return JSON.parse(localStorage.getItem("favoritos")) || [];
}


//Renderizo la seccion de favorito
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


//Capturo el boton favorito 
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


function agregarFavoritos(id) {
    const arrayCarritoFav = obtenerStorageFavoritos();
    const prodSelecFav = productos.find(e => e.id === id);
    const prodCartFav = {
        id: prodSelecFav.id,
        imagen: prodSelecFav.imagen,
        modelo: prodSelecFav.modelo,
        precio: prodSelecFav.precio,
        cantidad: 1
    };

    //busco, si existe, el indice del producto favorito seleccionado
    let index = arrayCarritoFav.findIndex(e => e.id === id);
    //agrego el objeto que encontre en el paso antetior
    index == -1 ? arrayCarritoFav.push(prodCartFav) : arrayCarritoFav[index].cantidad++;
    // guardo el array nuevo dentro del storage
    guardarStorageFavoritos(arrayCarritoFav);
    // muestro el array favorito   
    renderizarFavorito(arrayCarritoFav, contenedorFavorito)
}
//!Ver problema favorito