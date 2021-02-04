// Game variables

const cards = document.querySelectorAll('.memory-card-lv1');
const cards2 = document.querySelectorAll('.memory-card-lv2');
var firstCard = null;
var secondCard = null;
var firstClick = true;
var flipping = false;
var secs = 0;
var currentGameMatches = 0;
const levelOneMatches = 6;
const levelTwoMatches = 8;
var timer;

// Game funtions, to start the game, flip (or unflip), match cards & disable the cards during each move and at the end of the game

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

// Score, noves and winning the game functions

function updateScore(score) {
    document.querySelector('#score').innerHTML = score;
}

// (basic concept for moves inspired by Youtube user [codeTonight](https://www.youtube.com/watch?v=QrTCHHhoUQU))
function updateMoves() {
    var moves = document.querySelector('#moves').innerHTML;
    moves++;
    document.querySelector('#moves').innerHTML = moves;
}

function checkForWin(currentScore) {
    var level = calculateCurrentLevel();
    if (level === 1) {
        return currentScore >= levelOneMatches;
    } else {
        return currentScore >= levelTwoMatches;
    }
}

function calculateCurrentLevel() {
    var currentLevel = document.querySelector('table.game-board').getAttribute('id');
    if (currentLevel === 'level1') {
        return 1;
    } else {
        return 2;
    } 
}

// Alerts when game won or time run out

function finishGame() {
    if (checkForWin(currentGameMatches)) {
        setTimeout(alert("Congratulations! 🎉 You won the game! 🎉 Close this window and then you can 'Play Again' or choose a different level 😄"), 1500);
    } else {
        alert("Sorry, you ran out of time. ⌛ To have another try, close this window and then you can 'Play Again' or choose a different level");
        disableAllCards();
    }
    clearInterval(timer);
}

// Main Game Play

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

// Shuffling the cards depending on level (basic concept taken from Youtube user [freeCodeCamp.org](https://www.youtube.com/watch?v=ZniVgo8U7ek&t=330s))

(function shuffleLevel1() {
  cards.forEach(card => {
    var randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

(function shuffleLevel2() {
  cards2.forEach(card => {
    var randomPos = Math.floor(Math.random() * 14);
    card.style.order = randomPos;
  });
})();

// setting the time function - 60 seconds to finish the game, the basic funtion was taken from Youtube user [codeTonight](https://www.youtube.com/watch?v=QrTCHHhoUQU)

function time() {
    var mins = 0;
    var SS;
    var MM;
    timer = setInterval(() => {
        secs++;
        if(secs==60){secs=0; mins++}
        secs<10?SS=`0${secs}`:SS=`${secs}`;
        mins<10?MM=`0${mins}`:SS=`${mins}`;
        
        document.querySelector('#time').innerHTML = `${MM}:${SS}`;
    }, 1000);
    setTimeout(finishGame, 60000);
}

// Event listeners

cards.forEach(card => card.addEventListener('click', gamePlay));
cards2.forEach(card => card.addEventListener('click', gamePlay));