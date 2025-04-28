const messages = [
    "Te amo muito, minha linda!",
    "Você é a melhor parte do meu dia!",
    "Minha vida é mais feliz com você!",
    "Você é meu tudo!",
    "Sou tão grata por ter você ao meu lado!",
    "Você ilumina minha vida com seu sorriso!",
    "A cada dia, me apaixono mais por você!",
    "Você é a minha felicidade!",
    "Estar ao seu lado é o meu maior presente!",
    "Amo o jeito que você me faz sentir!",
    "Com você, me sinto completa e amada!",
    "Você é a razão do meu sorriso todos os dias!",
    "Cada momento com você é único e especial!",
    "Você é minha melhor amiga e meu amor!",
    "Eu encontrei meu lugar no mundo ao seu lado!",
    "Só você consegue me fazer sentir assim, tão amada!",
    "Somos perfeitas juntas!"
];

const messageElement = document.getElementById('message');
const button = document.getElementById('changeMessageButton');

function getRandomGradient() {
    const colors = [
        ['#ff80bf', '#ff7eb9', '#ff65a3'], 
        ['#d4a5f9', '#9c63e5', '#af8cff'], 
        ['#a1c4fd', '#c2e9fb', '#ffb6d7'], 
    ];

    const randomScheme = colors[Math.floor(Math.random() * colors.length)];
    return `linear-gradient(135deg, ${randomScheme[0]}, ${randomScheme[1]}, ${randomScheme[2]})`;
}

function animateHeart() {
    const heart = document.createElement('span');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.animation = 'heartPulse 0.8s ease-in-out infinite';
    }, 10);

    setTimeout(() => {
        heart.style.animation = 'fadeOut 1s ease-in-out forwards';
    }, 800); 

    setTimeout(() => {
        heart.remove(); 
    }, 1800); 
}

button.addEventListener('click', function() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageElement.textContent = randomMessage;
    requestAnimationFrame(updateBackground);
    animateHeart();
});

function updateBackground() {
    document.body.style.background = getRandomGradient();
}