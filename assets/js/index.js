const teams_pt = ["FCPorto","Benfica","Sporting","Penafiel"];
const teams_ge = ["Leipzig","Schalke","Nurnberg","Hannover"];
const teams_en = ["Arsenal","WestHam","Brighton","Coventry"];
const teams_es = ["Sevilha","Osasuna","Mallorca","Espanyol"];
const teams_nl = ["Sittard","Utrecht","Waalwijk","Heracles"];
const teams_it = ["ACMilan","Udinese","Sassuolo","Reggiana"];

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

    document.getElementById(elementId).innerText = `${team1}  \b - \b   ${team2}`;
}

window.onload = function() {
    generateMatchup(teams_pt, 'PT', 'PT');
    generateMatchup(teams_ge, 'GE', 'GE');
    generateMatchup(teams_en, 'EN', 'EN');
    generateMatchup(teams_es, 'ES', 'ES');
    generateMatchup(teams_nl, 'NL', 'NL');
    generateMatchup(teams_it, 'IT', 'IT');
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