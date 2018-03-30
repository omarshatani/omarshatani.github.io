/*
 * Create a list that holds all of your cards
 */
 let deck = document.getElementsByClassName('card');
 let cards = document.getElementsByClassName('fa');
 let shuffledCards = document.getElementsByClassName('fa');
 const moves = document.querySelector('.moves');

 cards = Array.from(cards);
 shuffledCards = Array.from(shuffledCards);

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

function restart () {
  //Resetting moves
  moves.innerText = "0";
  //Resetting cards to closed
  for (card of cards) {
    card.parentElement.setAttribute('class', 'card');
  }
  //Shuffling each card and update
  shuffledCards = shuffle(shuffledCards);
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.value = shuffledCards[i].classList.value;
  }
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

document.addEventListener('DOMContentLoaded', function (event) {
  restart();
});


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 cards.splice(0, 4);
 shuffledCards.splice(0,4);
