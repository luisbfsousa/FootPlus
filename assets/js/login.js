document.querySelector('.login-button').addEventListener('click', function(event) {
    event.preventDefault(); 

    var email = document.querySelector('.login-input[type="text"]').value;
    var password = document.querySelector('.login-input[type="password"]').value;

    var predefinedEmail = 'diogolinux@gmail.com'; 
    var predefinedPassword = 'birdlover'; 

    var errorMessage = document.querySelector('#error-message');

    if (email === predefinedEmail && password === predefinedPassword) {
        errorMessage.style.visibility = 'hidden';
        localStorage.setItem('email', predefinedEmail);
        localStorage.setItem('hasAccount', 'true');
        window.location.href = 'index.html';
    } else {
        errorMessage.style.visibility = 'visible';
    }
});

document.querySelector('.guest-button').addEventListener('click', function(event) {
    event.preventDefault(); 

    var guestEmail = document.querySelector('.guest-input[type="text"]').value; 

    if(guestEmail === 'diogolinux@gmail.com') {
        alert('Invalido, email ja associado a uma conta');
    } else if(guestEmail.includes("@")) {
        localStorage.setItem('email', guestEmail);
        localStorage.setItem('hasAccount', 'false');
        window.location.href = 'index.html';
    } else {
        alert('Email inválido');
    }
});

// adicionar uma variavel True ou False para verificar se o utilizador tem conta ou nao