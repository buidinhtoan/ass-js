
        var url = 'https://5ea519b52d86f00016b45734.mockapi.io/api/books/1/users';
        fetch(url, {
            method: 'GET',
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            var html = '';
            for (let index = 0; index < data.length; index++) {
                html += '<tr id="row_' + data[index].id + '">' +
                    '<td>' + data[index].id + '</td>' +
                    '<td>' + data[index].name + '</td>' +
                    '<td>' + data[index].email + '</td>' +
                    '<td>' + data[index].birthday + '</td>' +
                    '<td><a href="./editUser.html?id=' + data[index].id + '" class="btn btn-primary">Update</a></td>' +
                    '<td><button onclick="confirmUserDelete(' + data[index].id +
                    ', \'' + data[index].name + '\')" class="btn btn-danger">Delete</button></td>' +
                    '</tr>'
            }
            document.getElementById('listUser').innerHTML = html;
            
        });

        function confirmUserDelete(id, name) {
            var confirmResult = confirm("Are you sure to delete item " + name);
            if (confirmResult === true) {
                var urlDelete = 'https://5ea519b52d86f00016b45734.mockapi.io/api/books/1/users' + id;

                fetch(urlDelete, {
                    method: 'DELETE',
                }).then(function (response) {
                    return response.json();
                }).then(function (data) {
                    document.getElementById('row_' + data.id).remove();
                });
                console.log();
            }
        }