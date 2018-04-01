/*
 * Create a list that holds all of your cards
 */
 let deck = document.querySelector('.deck');
 let cards = document.getElementsByClassName('card');
 let shuffledCards;
 let clickStack = [];
 const moves = document.querySelector('.moves');

 cards = Array.from(cards);
 shuffledCards = Array.from(cards);

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

function restart () {
  //Resetting moves
  moves.innerText = "0";

  //For debugging
  // for (card of cards) {
  //   card.classList.add('open', 'show');
  // }

  //Shuffling each card and update
  deck.innerHTML = "";
  shuffle(shuffledCards);
  for (card of shuffledCards) {
    deck.append(card);
  }

}

function close (card) {
  card.setAttribute('class', 'card');
}

function compare(array) {
    if (array[0].children[0].classList.value === array[1].children[0].classList.value)
        return true;
    else return false;
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

deck.addEventListener('click', function (event) {
    if (event.target.nodeName === "LI" && clickStack.length < 2) {
        clickStack.push(event.target);
		    event.target.classList.add('open', 'show');
    }
    if (clickStack.length > 1) {
      setTimeout(function () {
        if (compare(clickStack)) {
          clickStack[0].setAttribute('class', 'card match');
          clickStack[1].setAttribute('class', 'card match');
            } else {
          close(clickStack[0]);
          close(clickStack[1]);
          // clickStack[0].setAttribute('class', 'card');
          // clickStack[1].setAttribute('class', 'card');
            }
        clickStack = [];
      }, 1000);
    }
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
