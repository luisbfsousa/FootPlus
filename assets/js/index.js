const teams_pt = ["FCPorto","Penafiel"];
const teams_pt1 = ["Sporting","Benfica"];
const teams_pt2 = ["Boavista","Rio Ave"];

const teams_ge = ["Nurnberg","Hannover"];
const teams_ge1 = ["Leipzig","Schalke"];
const teams_ge2 = ["Dortmund", "Freiburg"];

const teams_en = ["Chelsea","Brighton"];
const teams_en1 = ["Burnley","Everton"];
const teams_en2 = ["Arsenal","WestHam"];

const teams_es = ["Sevilha","Osasuna","Mallorca","Espanyol"];
const teams_es1 = ["Almería","Valencia"];

const teams_nl = ["Sittard","Utrecht","Waalwijk","Heracles"];

const teams_it = ["ACMilan","Udinese","Sassuolo","Reggiana"];
const teams_it1 = ["Nápoles","Juventus"];

function generateMatchup(teams, leagueName, elementId) {
    let team1, team2;

    if (localStorage.getItem(`team1_${leagueName}`) && localStorage.getItem(`team2_${leagueName}`)) {
        team1 = localStorage.getItem(`team1_${leagueName}`);
        team2 = localStorage.getItem(`team2_${leagueName}`);
    } else {
        team1 = teams[Math.floor(Math.random() * teams.length)];
        do {
            team2 = teams[Math.floor(Math.random() * teams.length)];
        } while (team2 === team1);

        localStorage.setItem(`team1_${leagueName}`, team1);
        localStorage.setItem(`team2_${leagueName}`, team2);
    }

    document.getElementById(elementId).innerText = `${team1} \b - \b ${team2}`;
}

window.onload = function() {
    generateMatchup(teams_pt, 'PT', 'PT');
    generateMatchup(teams_pt1, '4PT', '4PT');
    generateMatchup(teams_pt2, '5PT', '5PT');

    generateMatchup(teams_ge, 'GE', 'GE');
    generateMatchup(teams_ge1, '3GE', '3GE');
    generateMatchup(teams_ge2, '4GE', '4GE');

    generateMatchup(teams_en, '3EN', '3EN');
    generateMatchup(teams_en1, '4EN', '4EN');
    generateMatchup(teams_en2, '2EN', '2EN');

    generateMatchup(teams_es, 'ES', 'ES');
    generateMatchup(teams_es1, '1ES', '1ES');
    generateMatchup(teams_nl, 'NL', 'NL');

    generateMatchup(teams_it, 'IT', 'IT');
    generateMatchup(teams_it1, '2IT', '2IT');

};

/* carrosel   

let carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
let currentIndex = 0;

setInterval(() => {
    carouselItems[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + 1) % carouselItems.length;

    carouselItems[currentIndex].classList.add('active');
}, 2000); */

/* Chat */

document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.chat-input');
    const container = document.querySelector('.chat-container');
    const typingIndicator = document.querySelector('#typing-indicator');

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && input.value.trim() !== '') {
            const userMessage = document.createElement('div');
            userMessage.classList.add('chat-message', 'user');
            userMessage.textContent = input.value;
            container.appendChild(userMessage);

            input.value = '';

            typingIndicator.style.display = 'block';

            setTimeout(function() {
                const botMessage = document.createElement('div');
                botMessage.classList.add('chat-message', 'bot');
                botMessage.textContent = generateResponse(userMessage.textContent);
                container.appendChild(botMessage);

                typingIndicator.style.display = 'none';

                container.scrollTop = container.scrollHeight;
            }, 1500); 
        }
    });
});

function generateResponse(input) {
    var response = '';

    var cleanedInput = input.toLowerCase().replace(/[^\w\s?!.,]/gi, '');

    //divirtam-se a fazer uma montanha de if/else
    if (cleanedInput.includes('qual o melhor jogo')) {
        response = 'Jogo do FcPorto no estádio do Dragão';
    } else if (cleanedInput.includes('que medidas devo tomar antes do jogo')) {
        response = 'O estádio do Dragão tem capacidade de 50mil lugares então deve chegar com tempo para evitar constrangimentos';
    } else if (cleanedInput.includes('obrigado')) {
        response = 'De nada, bom jogo';
    } else if (cleanedInput.includes('ola')) {
        response = 'ola, no que posso ajudar?'
    } else {
        response = 'Nao entendi a pergunta, volte a repetir por favor';
    }

    return response;
}

document.querySelectorAll('.checkout-button').forEach(function(button) {
    button.addEventListener('click', function() {
        window.location.href = 'checkout.html'; 
    });
});

const gameTypeMapping = {
    'bundesliga': 'GE',
    'bundesliga': '3GE',
    'bundesliga': '4GE',
    'premierleague': '3EN',
    'premierleague': '4EN',
    'premierleague': '2EN',
    'ligabetclic': 'PT',
    'ligabetclic': '4PT',
    'ligabetclic': '2PT', 
    'laliga': 'ES',
    'laliga' : '1ES',
    'seriea': 'IT',
    'seriea': '2IT',
    'eredivisie': 'NL'
};

const checkoutButtons = document.querySelectorAll('.checkout-button');

checkoutButtons.forEach((button) => {
    button.addEventListener('click', function() {
        const id = button.parentElement.previousElementSibling.id;

        const gameType = gameTypeMapping[id];

        window.location.href = `checkout.html?gameType=${gameType}`;
    });
});