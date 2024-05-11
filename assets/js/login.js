document.querySelector('.login-button').addEventListener('click', function(event) {
    event.preventDefault(); 

    var email = document.querySelector('.login-input[type="text"]').value;
    var password = document.querySelector('.login-input[type="password"]').value;

    var predefinedEmail = 'diogoinux@gmail.com'; 
    var predefinedPassword = 'birdlover'; 

    var errorMessage = document.querySelector('#error-message');

    if (email === predefinedEmail && password === predefinedPassword) {
        errorMessage.style.visibility = 'hidden';
        localStorage.setItem('email', predefinedEmail);
        window.location.href = 'index.html';
    } else {
        errorMessage.style.visibility = 'visible';
    }
});

document.querySelector('.guest-button').addEventListener('click', function(event) {
    event.preventDefault(); 

    var guestEmail = document.querySelector('.guest-input[type="text"]').value; 
    if(guestEmail) {
        localStorage.setItem('email', guestEmail);
        window.location.href = 'index.html';
    }
});