// Variables declaration
let deck = document.querySelector('.deck');
let cards = document.getElementsByClassName('card');
let shuffledCards;
let clickStack = [];
let winCounter = 0;
let limit = 12;
let time;
const finishTime = document.querySelector('.finishTime');
const victory = document.querySelector('.victory');
const moves = document.querySelector('.moves');
const result = document.querySelector('.result');
const restart = document.querySelector('.restart');
const retry = document.querySelector('.retry');
const stars = document.querySelector('.stars');
const starsCount = document.querySelector('.starsCount');
cards = Array.from(cards);
shuffledCards = Array.from(cards);

const timer = {
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds')
}

// Closes a single card
function close(card) {
  card.setAttribute('class', 'card');
}

// Stars reset
function starsReset() {
  stars.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    stars.insertAdjacentHTML('afterbegin', '<li><i class="fa fa-star"></i></li>');
  }
}

// Starts the timer
function setTimer() {
  time = setInterval(function() {
    if (timer.seconds.innerHTML < 59) {
      timer.seconds.innerHTML++;
      if (timer.seconds.innerHTML < 10) {
        timer.seconds.innerHTML = "0" + timer.seconds.innerHTML;
      }
    } else {
      timer.minutes.innerHTML++;
      timer.seconds.innerHTML = "00";
      if (timer.minutes.innerHTML < 10) {
        timer.minutes.innerHTML = "0" + timer.minutes.innerHTML;
      }
    }
    if (timer.minutes.innerHTML === 59 && timer.seconds.innerHTML === 59) {
      timer.hours.innerHTML++;
      timer.minutes.innerHTML = "00";
      timer.seconds.innerHTML = "00";
      if (timer.hours.innerHTML < 10) {
        timer.hours.innerHTML = "0" + timer.hours.innerHTML;
      }
    }
    console.log("Seconds " + timer.seconds.innerHTML);
    console.log("Minutes " + timer.minutes.innerHTML);
  }, 1000);
}

// Reset the timer
function resetTimer() {
  clearInterval(time);
  timer.seconds.innerHTML = "00";
  timer.minutes.innerHTML = "00";
  timer.hours.innerHTML = "00";
}

function startTimer() {
  //Resets timer
  resetTimer();
  //Starts new timer
  setTimer();
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

  // Start / Reset timer
  startTimer();

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

  // Stars logic
  if (stars.childElementCount > 0) {
    if (moves.innerText >= limit) {
      stars.firstElementChild.remove();
      limit += 8;
    }
  }

  // Win check
  if (winCounter === 8) {
    //Stop timer
    clearInterval(time);
    // Open win interface
    victory.style.display = "block";
    // Update moves result
    result.innerText = moves.innerText;
    // Update stars result
    starsCount.innerText = stars.childElementCount.toString();
    // Update time result
    finishTime.innerHTML = "<strong>" + timer.hours.innerText + ":" + timer.minutes.innerText + ":" + timer.seconds.innerText + "</strong>";
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

deck.addEventListener('click', startTimer(), {once: true});

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
