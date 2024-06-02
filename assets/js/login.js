document.querySelector('.login-button').addEventListener('click', function(event) {
    event.preventDefault(); 

    var email = document.querySelector('.login-input[type="text"]').value;
    var password = document.querySelector('.login-input[type="password"]').value;

    var predefinedEmail = 'diogolinux@gmail.com'; 
    var predefinedPassword = 'birdlover'; 

    if (email === predefinedEmail && password === predefinedPassword) {
        localStorage.setItem('email', predefinedEmail);
        localStorage.setItem('hasAccount', 'true');
        window.location.href = 'index.html';
    } else {
        showAlert('Membro não encontrado');
    }
});

document.querySelector('.guest-button').addEventListener('click', function(event) {
    event.preventDefault(); 

    var guestEmail = document.querySelector('.guest-input[type="text"]').value; 

    if(guestEmail === 'diogolinux@gmail.com') {
        alert('Invalido, email já associado a uma conta');
    } else if(guestEmail.includes("@gmail.com")) {
        localStorage.setItem('email', guestEmail);
        localStorage.setItem('hasAccount', 'false');
        window.location.href = 'index.html';
    } else {
        alert('Email inválido');
    }
});

function showAlert(message) {
    if (message !== undefined) {
        alert(message);
    }
}

// TODO adicionar uma variavel True ou False para verificar se o utilizador tem conta ou nao