document.querySelector('.login-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    var email = document.querySelector('.login-input[type="text"]').value;
    var password = document.querySelector('.login-input[type="password"]').value;

    var predefinedEmail = 'diogo.tav.carvalho@ua.pt'; // Replace with your predefined email
    var predefinedPassword = 'birdlover'; // Replace with your predefined password

    var errorMessage = document.querySelector('#error-message');

    if (email === predefinedEmail && password === predefinedPassword) {
        errorMessage.style.visibility = 'hidden';
        window.location.href = 'index.html';
    } else {
        errorMessage.style.visibility = 'visible';
    }
});

document.querySelector('.guest-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    window.location.href = 'index.html';
});