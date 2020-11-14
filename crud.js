const usersFromStorage = localStorage.getItem('users'); 
const users = JSON.parse(usersFromStorage) || [];

function printUsers() {
    users.forEach((usuario) => {
        const $tr = `<tr><td>${usuario.name}</td><td>${usuario.age}</td><td>${usuario.email}</td><td>${usuario.gender}</td></tr>`;
        document.getElementById('tableBody').innerHTML += $tr;
    })
};

function addUser(event) {
    const $form = document.querySelector('form');
    const nuevoUsuario = {
        name: $form.querySelector('#nombre').value,
        age: Number($form.querySelector('#edad').value),
        email: $form.querySelector('#email').value,
        gender: $form.querySelector('#genero').value
    }
    users.push(nuevoUsuario);
    document.getElementById('tableBody').textContent ='';
    printUsers();

    localStorage.setItem('users', JSON.stringify(users));

    event.preventDefault();
}

if(users) {
    printUsers();
}

