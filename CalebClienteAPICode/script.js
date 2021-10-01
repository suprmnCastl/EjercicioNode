$('#guarda_producto').click(function() {
    var codigo = $('#codigo').val()
    var nombre = $('#nombre').val()
    var precio = $('#precio').val()
    var existencias = $('#existencias').val()

    var data_producto = { 'codigo': codigo, 'nombre': nombre, 'precio': precio, 'existencias': existencias }

    $.ajax({
        type: 'POST',
        url: 'http://localhost:8985/producto',
        contentType: 'application/json',
        data: JSON.stringify(data_producto)
    }).done(function() {
        alert('Producto grabado con exito')
    }).fail(function(err) {
        alert(err)
    })
})

$('#obtener_producto').click(function() {
    var id = $('#id').val()

    fetch('http://localhost:8985/producto?id=' + id)
        .then(response => response.json())
        .then(data => alert(JSON.stringify(data)))
})