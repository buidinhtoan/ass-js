function submitForm(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var birthday = document.getElementById('birthday').value;
    var url = 'https://5ea519b52d86f00016b45734.mockapi.io/api/books/1/users';
    var params = {
        name: name,
        email: email,
        birthday: birthday
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
        window.location.href = './users.html'
    })
}
