const messages = [
    "Te amo muito, minha linda!",
    "Você é a melhor parte do meu dia!",
    "Minha vida é mais feliz com você!",
    "Você é meu tudo!",
    "Sou tão grata por ter você ao meu lado!",
    "Você ilumina minha vida com seu sorriso!",
    "A cada dia, me apaixono mais por você!",
    "Você é minha felicidade, meu amor!",
    "Estar ao seu lado é o meu maior presente!",
    "Amo o jeito que você me faz sentir!",
    "Com você, me sinto completa e amada!",
    "Você é a razão do meu sorriso todos os dias!",
    "Cada momento com você é único e especial!",
    "Você é minha melhor amiga e meu amor!",
    "Eu encontrei meu lugar no mundo ao seu lado!",
    "Só você consegue me fazer sentir assim, tão amada!",
    "Somos perfeitas juntas, meu amor!"
];

const messageElement = document.getElementById('message');
const button = document.getElementById('changeMessageButton');

button.addEventListener('click', function() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageElement.textContent = randomMessage;

    document.body.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
});
