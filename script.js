// Select elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const curScore0El = document.getElementById('current--0');
const curScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const newBtnEl = document.querySelector('.btn--new');
const rollBtnEl = document.querySelector('.btn--roll');
const holdBtnEl = document.querySelector('.btn--hold');

let scores, curScore, activePlayer, playing;
const init = () => {
  // set all score to 0
  // set player 0 as starting player
  scores = [0, 0];
  curScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  curScore0El.textContent = 0;
  curScore1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--winner');
};
const switchPlayerTurn = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  curScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
rollBtnEl.addEventListener('click', () => {
  if (playing) {
    // 1. Generate random dice roll number
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display it on sceeen
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. if it is 1 switch player turn, else add dice number to the current score
    if (dice !== 1) {
      curScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        curScore;
    } else {
      switchPlayerTurn();
    }
  }
});
holdBtnEl.addEventListener('click', () => {
  if (playing) {
    // add current score to total score
    scores[activePlayer] += curScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // if total score >=100 show winner else switch player turn
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayerTurn();
    }
  }
});
newBtnEl.addEventListener('click', init);
init();
