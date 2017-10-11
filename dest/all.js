$(document).ready(function () {
    // LOGS SCREEN
    (function (message) {
        var log = document.querySelector('#log');

        ['log', 'warn', 'error'].forEach(function (verb) {
            console[verb] = (function (method, verb, log) {
                return function (text) {
                    method(text);
                    var msg = document.createElement('code');
                    msg.classList.add(verb);
                    msg.textContent = verb + ': ' + text;
                    log.appendChild(msg);
                };
            })(console[verb].bind(console), verb, log);
        });
    })();
});
$(document).ready(function () {

    var loaded = false;
    // GET/READ - default ajax method
    $('#get-button').on('click', function () {
        $.ajax({
            url: '/products',
            contentType: 'application/json',
            success: function (response) {
                var tbodyEl = $('tbody');
                tbodyEl.html('');
                response.products.forEach(function (product) {
                    tbodyEl.append('<tr><td class="id">' + product.id + '</td><td><input type="text" class="name form-control" value="' + product.name + '"></input></td><td><button class="update-button btn btn-info">UPDATE / PUT</button><button class="delete-button btn btn-danger">DELETE</button></td><tr></tr>');
                });
            }
        })
        if (loaded == false) {
            console.log('Products loaded');
            loaded = true;
        }
    });
    // POST
    $('#create-form').on('submit', function (event) {
        event.preventDefault();

        var createInput = $('#create-input');
        var typed = createInput.val();
        if (typed == '' || typed == 'undefined') {
            console.log('Please type the product\'s name');
        } else {
            $.ajax({
                url: '/products',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({name: createInput.val()}),
                success: function (response) {
                    console.log(response);
                    createInput.val('');
                    $('#get-button').click();
                }
            });
        }
    });
    // UPDATE/PUT
    $('table').on('click', '.update-button', function () {
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();
        var newName = rowEl.find('.name').val();

        $.ajax({
            url: '/products/' + id,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({newName: newName}),
            success: function (response) {
                console.log(response);
                $('#get-button').click();
            }
        });
    });

    // DELETE
    $('table').on('click', '.delete-button', function () {
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();

        $.ajax({
            url: '/products/' + id,
            method: 'DELETE',
            contentType: 'application/json',
            success: function (response) {
                console.log(response);
                $('#get-button').click();
            }
        });
    });

    // RELOAD
    $('#refresh').on('click', function () {
        location.reload();
    });
});