//!Constructor del Producto
class Producto {
    constructor(id, imagen, categoria, modelo, precio) {
        this.id = id;
        this.imagen = imagen;
        this.categoria = categoria;
        this.modelo = modelo;
        this.precio = precio;
    }
    mostrarDatos() {
        alert(`Usted eligio el producto: ${this.modelo} que cuesta $${this.precio}`);
    }
}

//!Constructor  del Carrito
class Carrito {
    constructor(id, modelo, precio, cantidad, imagen) {
        this.id = id;
        this.modelo = modelo;
        this.precio = precio;
        this.cantidad = cantidad;
        this.imagen = imagen;
    }
}
//! Creo funciones para interactuar con el LocalStorage
const GuardarStorage = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor));
};

const ObtenerStorage = (clave) => {
    const valor = JSON.parse(localStorage.getItem(clave));
    return valor;
};

//!Renderizo los Productos
function renderizarProductos(contenedor, productos) {
    productos.forEach(producto => {
        const cardDiv = document.createElement('div');
        cardDiv.setAttribute('class', 'col-md-6 col-lg-4 col-xl-3 p-2');

        const imagen = document.createElement('img');
        imagen.setAttribute('src', producto.imagen);
        imagen.setAttribute('class', 'card-img-top w-100');
        cardDiv.appendChild(imagen);

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.setAttribute('class', 'card-body text-center');

        const titulo = document.createElement('h5');
        titulo.setAttribute('class', 'text-capitalize mt-3 mb-1');
        titulo.innerText = `${producto.modelo}`;
        cardBodyDiv.appendChild(titulo);

        const precio = document.createElement('p');
        precio.setAttribute('class', 'fw-bold d-block');
        precio.innerText = `$ ${producto.precio}`;
        cardBodyDiv.appendChild(precio);

        cardDiv.appendChild(cardBodyDiv);

        const boton = document.createElement('button');
        boton.setAttribute('class', 'btn btn-primary mt-3');
        boton.setAttribute('id', producto.id);
        boton.innerText = 'Agregar al carrito';
        cardBodyDiv.appendChild(boton);

        contenedor.appendChild(cardDiv);
        boton.addEventListener('click', agregarAlCarrito);

        const favorito = document.createElement('button');
        favorito.setAttribute('class', 'btn btn-primary mt-3')
        favorito.setAttribute('id', producto.id);
        favorito.innerHTML = `<i class="fa fa-heart"></i>`;
        cardBodyDiv.appendChild(favorito);
    });
}