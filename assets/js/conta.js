window.onload = function() {
    var email = localStorage.getItem('email');
    var predefinedEmail = 'diogolinux@gmail.com'; 
    var accountImage = document.querySelector('.account-image');
    var accountEmailElement = document.querySelector('.account-email');

    if (email === predefinedEmail) {
        accountImage.src = 'assets/images/diogo.jpeg';
        accountEmailElement.textContent = "Socio: nº 69420";
    } else {
        accountImage.src = 'assets/images/convidado.jpg'; 
        accountEmailElement.textContent = "";
    }
};

document.querySelector('.account-button').addEventListener('click', function() {
    var nomeCompleto = document.getElementById('nomeCompleto').value;
    var nomeAbreviado = document.getElementById('nomeAbreviado').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var NumeroCC = document.getElementById('NumeroCC').value;
    var email = document.getElementById('email').value;
    var nTelefone = document.getElementById('nTelefone').value;
    var morada = document.getElementById('morada').value;
    var cidade = document.getElementById('cidade').value;
    var codigoPostal = document.getElementById('codigoPostal').value;
    var pais = document.getElementById('pais').value;
    var genero = document.getElementById('genero').value;

    if (!nomeCompleto || !nomeAbreviado || !dataNascimento || !NumeroCC || !email || !nTelefone || !morada || !cidade || !codigoPostal || !pais || genero === "") {
        alert('Preencha todos os campos');
    } else {
        localStorage.setItem('nomeCompleto', nomeCompleto);
        localStorage.setItem('nomeAbreviado', nomeAbreviado);
        localStorage.setItem('dataNascimento', dataNascimento);
        localStorage.setItem('NumeroCC', NumeroCC);
        localStorage.setItem('email', email);
        localStorage.setItem('nTelefone', nTelefone);
        localStorage.setItem('morada', morada);
        localStorage.setItem('cidade', cidade);
        localStorage.setItem('codigoPostal', codigoPostal);
        localStorage.setItem('pais', pais);
        localStorage.setItem('genero', genero);
        alert('Perfil Atualizado');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nomeCompleto').value = localStorage.getItem('nomeCompleto') || '';
    document.getElementById('nomeAbreviado').value = localStorage.getItem('nomeAbreviado') || '';
    document.getElementById('dataNascimento').value = localStorage.getItem('dataNascimento') || '';
    document.getElementById('NumeroCC').value = localStorage.getItem('NumeroCC') || '';
    document.getElementById('email').value = localStorage.getItem('email') || '';
    document.getElementById('nTelefone').value = localStorage.getItem('nTelefone') || '';
    document.getElementById('morada').value = localStorage.getItem('morada') || '';
    document.getElementById('cidade').value = localStorage.getItem('cidade') || '';
    document.getElementById('codigoPostal').value = localStorage.getItem('codigoPostal') || '';
    document.getElementById('pais').value = localStorage.getItem('pais') || '';
});