function agregarAlCarrito(nombre, precio) {
    // Crear una nueva fila para la tabla
    var nuevaFila = document.createElement("tr");
    
    // Crear celdas para la fila
    var celdaProducto = document.createElement("td");
    celdaProducto.textContent = nombre;
    celdaProducto.classList.add('font-medium', 'text-gray-800', 'p-4', 'text-lg');
    
    var celdaPrecio = document.createElement("td");
    celdaPrecio.classList.add('text-green-500', 'font-bold', 'p-4', 'text-right', 'text-lg');
    celdaPrecio.textContent = "$" + precio;
    
    // Crear celda para el botón de eliminar
    var celdaEliminar = document.createElement("td");
    var botonEliminar = document.createElement("button");
    botonEliminar.textContent = "X";
    botonEliminar.classList.add('bg-red-500', 'hover:bg-red-600', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded');
    botonEliminar.onclick = function() {
        eliminarProducto(nuevaFila);
    };
    celdaEliminar.appendChild(botonEliminar);

    // Agregar las celdas a la fila
    nuevaFila.appendChild(celdaProducto);
    nuevaFila.appendChild(celdaPrecio);
    nuevaFila.appendChild(celdaEliminar);
    
    // Agregar la fila a la tabla
    var cuerpoTabla = document.getElementById("cuerpo-tabla-carrito");
    cuerpoTabla.appendChild(nuevaFila);
    
    // Calcular y mostrar el total del carrito
    calcularTotalCarrito();
}

function eliminarProducto(fila) {
    fila.remove();
    calcularTotalCarrito();
}

function calcularTotalCarrito() {
    // Obtener todas las celdas de precio en la tabla
    var precios = document.querySelectorAll("#cuerpo-tabla-carrito td:nth-child(2)");

    // Inicializar el total
    var total = 0;

    // Sumar los precios de todos los elementos en la tabla
    precios.forEach(function (item) {
        var precio = parseFloat(item.textContent.slice(1)); // Eliminar el signo de dólar
        total += precio;
    });

    // Mostrar el total en el elemento correspondiente
    var totalCarrito = document.getElementById("total-carrito");
    totalCarrito.textContent = "Total: $" + total;
    totalCarrito.classList.add('text-xl', 'font-bold', 'p-4', 'text-blue-600', 'border-t', 'border-gray', 'text-right');
}
