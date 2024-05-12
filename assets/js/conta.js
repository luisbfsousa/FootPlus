window.onload = function() {
    var email = localStorage.getItem('email');
    var predefinedEmail = 'diogolinux@gmail.com'; 
    var accountImage = document.querySelector('.account-image');

    if (email === predefinedEmail) {
        accountImage.src = 'assets/images/diogo.jpeg';
    } else {
        accountImage.src = 'assets/images/convidado.jpg'; 
    }

    document.querySelector('.account-email').textContent = email;
};