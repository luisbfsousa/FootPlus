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


const urlParams = new URLSearchParams(window.location.search);

const gameType = urlParams.get('gameType');

const matchInfo = document.querySelector('#match-info');

const team1 = localStorage.getItem(`team1_${gameType}`);
const team2 = localStorage.getItem(`team2_${gameType}`);

if (team1 && team2) {
    matchInfo.textContent = `${team1} - ${team2}`;
} else {
    matchInfo.textContent = 'Match-up not available';
}

const gameTypeMapping = {
    'PT': { time: '20:00', image: 'assets/images/sponsor_pt.png' },
    'GE': { time: '16:00', image: 'assets/images/sponsor_ge.png' },
    'EN': { time: '14:00', image: 'assets/images/sponsor_en.png' },
    'IT': { time: '17:30', image: 'assets/images/sponsor_it.png' },
    'ES': { time: '19:00', image: 'assets/images/sponsor_es.png' },
    'NL': { time: '18:00', image: 'assets/images/sponsor_nl.png' }
};

const time = gameTypeMapping[gameType].time;
const image = gameTypeMapping[gameType].image;

const timeElement = document.querySelector('.hours');
const imageElement = document.querySelector('.ticket img');

timeElement.textContent = time;
imageElement.src = image;