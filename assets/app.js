const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let firstClick = false;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  if (!firstClick){time()};
  firstClick = true;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
 }

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
 
  isMatch ? disableCards() : unflipCards();

  let moves = document.querySelector('#moves').innerHTML
  moves++
  document.querySelector('#moves').innerHTML = moves
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

function time() {
    let secs = 0
    let mins = 0
    let SS
    let MM
    setInterval(() => {
        secs++
        if(secs==60){secs=0; mins++}
        
        secs<10?SS=`0${secs}`:SS=`${secs}`
        mins<10?MM=`0${mins}`:SS=`${mins}`

        document.querySelector('#time').innerHTML = `${MM}:${SS}`
    }, 1000);
}

cards.forEach(card => card.addEventListener('click', flipCard));