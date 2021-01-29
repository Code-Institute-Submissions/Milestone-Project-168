const cards = document.querySelectorAll('.memory-card-lv1');
const cards2 = document.querySelectorAll('.memory-card-lv2');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard = null;
let secondCard = null;
let firstClick = true;
let flipping = false;
let secs = 0;
let currentGameMatches = 0;
const levelOneMatches = 6;
const levelTwoMatches = 8;
let timer;

function startGame() {
    if (firstClick) {
        time();
        firstClick=false;
    }
}

function unFlipCards() {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
}

function checkForMatch(firstCard, secondCard) {
    return firstCard.dataset.framework ===
    secondCard.dataset.framework;
}

function setCardsAsMatched() {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
}

function disableCards() {
    firstCard.removeEventListener('click', gamePlay);
    secondCard.removeEventListener('click', gamePlay);
}

function disableAllCards() {
    cards.forEach(card => card.removeEventListener('click', gamePlay));
    cards2.forEach(card => card.removeEventListener('click', gamePlay));
}

function resetFlippedCards() {
    firstCard = null;
    secondCard = null;
    flipping = false;
}

function updateScore(score) {
    document.querySelector('#score').innerHTML = score;
}

function updateMoves() {
    let moves = document.querySelector('#moves').innerHTML
    moves++
    document.querySelector('#moves').innerHTML = moves;
}

function checkForWin(currentScore) {
    level = calculateCurrentLevel();
    if (level === 1) {
        return currentScore >= levelOneMatches;
    } else {
        return currentScore >= levelTwoMatches;
    }
}

function calculateCurrentLevel() {
    let currentLevel = document.querySelector('table.game-board').getAttribute('id');
    if (currentLevel === 'level1') {
        return 1;
    } else {
        return 2;
    } 
}

function finishGame() {
    if (checkForWin(currentGameMatches)) {
        setTimeout(alert("Congratulations! You won the game!"), 1500);
    } else {
        alert("Sorry, you ran out of time. Have another try");
        disableAllCards();
    }
    clearInterval(timer);
}

function gamePlay() {
    startGame();
    if (flipping === false) {
        this.classList.add('flip');
        if (firstCard!==null & firstCard !== this) {
            flipping = true;
            secondCard = this;
            const match = checkForMatch(firstCard, secondCard);
            if (match === true) {
                disableCards();
                currentGameMatches = currentGameMatches + 1;
                updateScore(currentGameMatches);
                if (checkForWin(currentGameMatches)) {
                    finishGame();
                }
            } else {
                setTimeout(unFlipCards, 1000);
            }
            updateMoves();
            setTimeout(resetFlippedCards, 1000);
            console.log("setting second card, match?", match);
        } else {
            firstCard = this;
            console.log("setting first card");
        }
    } else {
        return false;
    }
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

function time() {
    let mins = 0
    let SS
    let MM
    timer = setInterval(() => {
        secs++
        if(secs==60){secs=0; mins++}
        secs<10?SS=`0${secs}`:SS=`${secs}`
        mins<10?MM=`0${mins}`:SS=`${mins}`
        
        document.querySelector('#time').innerHTML = `${MM}:${SS}`;
    }, 1000);
    setTimeout(finishGame, 60000);
}

cards.forEach(card => card.addEventListener('click', gamePlay));
cards2.forEach(card => card.addEventListener('click', gamePlay));