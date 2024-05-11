window.onload = function() {
    var email = localStorage.getItem('email');
    var predefinedEmail = 'diogo.tav.carvalho@ua.pt'; 
    var accountImage = document.querySelector('.account-image');

    if (email === predefinedEmail) {
        accountImage.src = 'assets/images/diogo.jpeg';
    } else {
        accountImage.src = 'assets/images/convidado.jpg'; 
    }

    document.querySelector('.account-email').textContent = email;
};