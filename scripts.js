$(document).ready(function () {
    // GET/READ - default ajax method
    $('#get-button').on('click', function () {
        $.ajax({
            url: '/products',
            contentType: 'application/json',
            success: function (response) {
                var tbodyEl = $('tbody');
                tbodyEl.html('');
                response.products.forEach(function (product) {
                    tbodyEl.append('<tr><td class="id">' + product.id + '</td><td><input type="text" class="name form-control" value="' + product.name + '"></input></td><td><button class="update-button btn btn-info">UPDATE / PUT</button><button class="update-delete btn btn-danger">DELETE</button></td><tr></tr>');
                });
            }
        })
    });
    // POST
    $('#create-form').on('submit', function (event) {
        event.preventDefault();

        var createInput = $('#create-input');

        $.ajax({
            url: '/products',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ name: createInput.val() }),
            success: function(response) {
                console.log(response);
                createInput.val('');
                $('#get-button').click();
            }
        });
    });
});