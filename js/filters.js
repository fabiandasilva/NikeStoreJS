//!Filtros de categorias
$("#filtroTodos").click((e) => {
    e.preventDefault();
    renderizarProductos(productos, contenedorProductos);
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

$("#btnFavorite").click((e) => {
    e.preventDefault()
    let favoritos = JSON.parse(localStorage.getItem("favoritos"));    
    renderizarProductos(favoritos, contenedorProductos);
});