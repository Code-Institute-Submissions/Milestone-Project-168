const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;

        //do cards match?
        if (firstCard.dataset.framework ===
            secondCard.dataset.framework) {
        // yes they match:
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', secondCard);
        } else {
            //no they dont match:
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }, 1000);
        }
        
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));