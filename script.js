// Select elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const curScore0El = document.getElementById('current--0');
const curScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const newBtnEl = document.querySelector('.btn--new');
const rollBtnEl = document.querySelector('.btn--roll');
const holdBtnEl = document.querySelector('.btn--hold');

// Starting coditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let curScore = 0;

rollBtnEl.addEventListener('click', () => {
  // 1. Generate random dice roll number
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display it on sceeen
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. if it is 1 switch player turn, else add dice number to the current score
  if (dice !== 1) {
    curScore += dice;
    curScore0El.textContent = curScore;
  } else {
  }
});
