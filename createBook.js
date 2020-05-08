        function submitForm(event) {
            event.preventDefault();
            var title = document.getElementById('title').value;
            var description = document.getElementById('description').value;
            var url = 'https://5ea519b52d86f00016b45734.mockapi.io/api/books/';
            var params = {
                title: title,
                description: description
            }

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(params),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                window.location.href = './books.html'
            })
        }
