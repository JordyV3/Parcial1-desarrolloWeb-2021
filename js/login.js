const form = document.getElementById('login');
const username = document.getElementById('usuario');
const password = document.getElementById('password');

form.addEventListener("submit", function(event){
    console.log('formLogin');
    let users = Array({
        usuario: username.value,
        password: password.value
    });
    localStorage.setItem('user', JSON.stringify(users));
    location.href ='/Registro.html';
});
