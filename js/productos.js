let carrito = [];
let total = 0;

function agregarAlCarrito(productoId) {
    // Aquí puedes implementar la lógica para agregar productos al carrito
    // Por ahora, solo actualizaré la lista de productos en el carrito para mostrar en el ejemplo
    const producto = `Producto ${productoId}`;
    const precio = 200 + productoId * 25; // Precio ficticio
    carrito.push({ producto, precio });
    total += precio;

    // Actualizar la lista del carrito y el total en la interfaz
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    const totalElement = document.getElementById("total");
    listaCarrito.innerHTML = "";
    
    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.producto} - $${item.precio}`;
        listaCarrito.appendChild(li);
    });

    totalElement.textContent = total;
}

function realizarCompra() {
    // Aquí puedes implementar la lógica para procesar la compra
    // Por ahora, solo mostraremos un mensaje en la consola
    console.log("Compra realizada. Productos:", carrito, "Total:", total);

    // Limpiar el carrito después de la compra
    carrito = [];
    total = 0;

    // Actualizar la interfaz
    actualizarCarrito();
    alert('Su Compra ha sido Realizada con exito');
}