// const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
const colors = [
    'red', 'blue', 'green', 'purple', 'orange', 'pink',
    'yellow', 'teal', 'brown', 'cyan',
    'red', 'blue', 'green', 'purple', 'orange', 'pink',
    'yellow', 'teal', 'brown', 'cyan'
];

let cards = shuffle(colors);
let selectedCards = [];
let score = 0;
let timeLeft = 40;
let gameInterval;

// DOM element selection
const startbtn = document.getElementById('startbtn');
// const restartbtn = document.getElementById('restartbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Generate cards dynamically
function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        card.style.backgroundColor = '#ddd';
        gameContainer.appendChild(card);
    }
}

// Handle card click
function handleCardClick(event) {
    const card = event.target;
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

// Check for a match
function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}

// Start game
function startGame() {
    timeLeft = 40;
    startbtn.disabled = true;
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    cards = shuffle(colors);
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    startGameTimer();
}

// Start timer
function startGameTimer() {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;
        if (timeLeft === 0) {
            clearInterval(gameInterval);
            alert('Game Over!');
            startbtn.disabled = false;
        }
    }, 1000);
}

// Attach event listeners
startbtn.addEventListener('click', startGame);
gameContainer.addEventListener('click', handleCardClick);
