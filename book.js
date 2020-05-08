
        var url = 'https://5ea519b52d86f00016b45734.mockapi.io/api/books';
        fetch(url, {
            method: 'GET',
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            var html = '';
            for (let index = 0; index < data.length; index++) {
                html += '<tr id="row_' + data[index].id + '">' +
                    '<td>' + data[index].id + '</td>' +
                    '<td>' + data[index].title + '</td>' +
                    '<td>' + data[index].description + '</td>' +
                    '<td><a href="./editBook.html?id=' + data[index].id + '" class="btn btn-primary">Update</a></td>' +
                    '<td><button onclick="confirmDelete(' + data[index].id +
                    ', \'' + data[index].title + '\')" class="btn btn-danger">Delete</button></td>' +
                    '</tr>'
            }

            document.getElementById('listBook').innerHTML = html;
        });

        function confirmDelete(id, title) {
            var confirmResult = confirm("Are you sure to delete item " + title);
            if (confirmResult === true) {
                var urlDelete = 'https://5ea519b52d86f00016b45734.mockapi.io/api/books/' + id;

                fetch(urlDelete, {
                    method: 'DELETE',
                }).then(function (response) {
                    return response.json();
                }).then(function (data) {
                    document.getElementById('row_' + data.id).remove();
                });
            }
        }