document.addEventListener('DOMContentLoaded', function(event) {
  // Variables declaration
  let deck = document.querySelector('.deck');
  let cards = document.getElementsByClassName('card');
  let shuffledCards;
  let clickStack = [];
  let winCounter = 0;
  let limit = 14;
  const victory = document.querySelector('.victory');
  const moves = document.querySelector('.moves');
  const result = document.querySelector('.result');
  const restart = document.querySelector('.restart');
  const retry = document.querySelector('.retry');
  const stars = document.querySelector('.stars');
  const starsCount = document.querySelector('.starsCount');
  cards = Array.from(cards);
  shuffledCards = Array.from(cards);

  // Closes a single card
  function close(card) {
    card.setAttribute('class', 'card');
  }

  // Stars reset
  function starsReset () {
    stars.innerHTML = "";
    for (let i = 0; i < 3; i++) {
    stars.insertAdjacentHTML('afterbegin', '<li><i class="fa fa-star"></i></li>');
    }
  }

  // Checks if cards are the same or not
  function compare(array) {
    if (array[0].children[0].classList.value === array[1].children[0].classList.value)
      return true;
    else
      return false;
  }

  // Shuffle function from http://stackoverflow.com/a/2450976
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  // Game initialization / reset
  function init() {
    //Stars initialization
    starsReset();
    // Resets win counter
    winCounter = 0;
    // Resets moves
    moves.innerText = "0";
    // Shuffling each card and update
    deck.innerHTML = "";
    shuffle(shuffledCards);
    for (card of shuffledCards) {
      deck.append(card);
    }
    // Closes all cards
    for (card of deck.children) {
      close(card);
    }

  }

  //Game logic
  function Game() {
    if (clickStack.length > 1) {
      // If cards match, set new class
      if (compare(clickStack)) {
        clickStack[0].setAttribute('class', 'card match');
        clickStack[1].setAttribute('class', 'card match');
        clickStack = [];
        // Increment win counter
        winCounter++;
        // Increment moves counter
        moves.innerText++;
      } else {
        // If cards don't match, close them and empty stack
        setTimeout(function() {
          close(clickStack[0]);
          close(clickStack[1]);
          clickStack = [];
        }, 1000);
      }
      // Increment moves counter
      moves.innerText++;
    }

    // Win check
    if (winCounter === 8) {
      // Open win interface
      victory.style.display = "block";
      // Update result
      result.innerText = moves.innerText;
      // Update stars result
      starsCount.innerText = stars.childElementCount.toString();
    }

    // Stars logic
    if (stars.childElementCount > 0) {
      if (moves.innerText >= limit) {
        stars.firstElementChild.remove();
        limit += 9;
        }
    }
  }

  // Listener for card click
  deck.addEventListener('click', function(event) {
    // Opens card if clicked and adds to stack
    if (event.target.nodeName === "LI" && clickStack.length < 2) {
      clickStack.push(event.target);
      event.target.classList.add('open', 'show');
    }

    // Game logic update
    Game();
  });


  // Restart button listener
  restart.addEventListener('click', function() {
    init();
  });

  // Play again listener
  retry.addEventListener('click', function() {
    init();
    victory.style.display = "none";
  });

  // Main
  init();

});
