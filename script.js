const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
let circleTurn;

function startGame() {
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.addEventListener('click', handleClick, { once: true });
  });
  setBoardHoverClass();
}

function handleClick(e) {
  const cell = e.target;
  const currectClass = circleTurn ? currectClass : X_CLASS;
  placeMark(cell, currectClass);
  swapTurns();
  setBoardHoverClass();

  function placeMark(cell, currectClass) {
    cell.classlist.add(currentClass);
  }
}
function swapTurns() {
  circleTurn - !circleTurn;
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classlist.add(X_CLASS);
  }
}
