function removeExistingErrorMessages() {
    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(message) {
        message.remove();
    });
}

document.querySelector('.ticket-socio .purchase-button').addEventListener('click', function() {
    var email = document.querySelector('#socio-ticket-1').value;
    var ticketCount = document.querySelector('#socio-ticket-2').value;
    var message = this.parentNode.querySelector('.error-message');
    if (email !== 'diogolinux@gmail.com' || ticketCount === '' || ticketCount < 0 || ticketCount > 99) {
        removeExistingErrorMessages();
        if (!message) {
            message = document.createElement('p');
            message.className = 'error-message';
            this.parentNode.appendChild(message);
        }
        if (email !== 'diogolinux@gmail.com') {
            message.textContent = 'Email não associado a conta de sócio';
        } else {
            message.textContent = 'Numero Invalido de Bilhetes';
        }
        document.getElementById('advance-purchase-button').style.display = 'none';
    } else {
        removeExistingErrorMessages(); 
        if (message) {
            message.remove();
        }
        if (ticketCount.length === 1) {
            ticketCount = '0' + ticketCount;
        }
        document.getElementById('socio-tickets-count').textContent = ticketCount;
        document.getElementById('publico-tickets-count').textContent = '00'; 
        document.getElementById('advance-purchase-button').style.display = 'block'; 
    }
});

document.querySelector('.ticket-publico .purchase-button').addEventListener('click', function() {
    var ticketCount = document.querySelector('.ticket-publico input[type="number"]').value;
    var message = this.parentNode.querySelector('.error-message');
    if (ticketCount === '' || ticketCount < 0 || ticketCount > 99) {
        removeExistingErrorMessages();
        if (!message) {
            message = document.createElement('p');
            message.className = 'error-message';
            this.parentNode.appendChild(message);
        }
        message.textContent = 'Numero Invalido de Bilhetes.';
        document.getElementById('advance-purchase-button').style.display = 'none'; 
    } else {
        removeExistingErrorMessages(); 
        if (message) {
            message.remove();
        }
        if (ticketCount.length === 1) {
            ticketCount = '0' + ticketCount;
        }
        document.getElementById('publico-tickets-count').textContent = ticketCount;
        document.getElementById('socio-tickets-count').textContent = '00'; // Set 'socio' count to 0
        document.getElementById('advance-purchase-button').style.display = 'block'; 
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('socio-tickets-count').textContent = '00';
    document.getElementById('publico-tickets-count').textContent = '00';
});