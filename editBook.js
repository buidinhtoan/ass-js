        var urlParams = new URLSearchParams(window.location.search);
        var id = urlParams.get('id');
        var url = 'https://5ea519b52d86f00016b45734.mockapi.io/api/books/' + id;

        fetch(url, {
            method: 'GET'
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            document.getElementById('title').value = data.title;
            document.getElementById('description').value = data.description;
        });

        function submitForm(event) {
            event.preventDefault();
            var title = document.getElementById('title').value;
            var description = document.getElementById('description').value;
            var url = 'https://5ea519b52d86f00016b45734.mockapi.io/api/books/' + id;
            var params = {
                title: title,
                description: description
            }

            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(params),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                window.location.href = './books.html';
            });
        }