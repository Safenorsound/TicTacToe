const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const winning_Combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const restartButton = document.getElementById('restartButton')
const winningMessageElement = document.getElementByID ('winningMessage')
let circleTurn;

startGame();

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

  if (checkWin(currectClass)){
  endGame(false);
} else if (isDraw()) {
  endGame(true)
} 

  function placeMark(cell, currectClass) {
    cell.classList.add(currentClass);
  }
}

function endGame(draw) {
  if (draw) {
    winningMessageElement.innerText = "Draw!"
  } else {
    winningMessageTextElement.innerText = '${circleTurn ? "O's" : "X's"} Wins!'
}
winningMessageElement.classList.add('show')
}
function isDraw () {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS || cell.classList.contains(CIRCLE_CLASS))
  }
    
    )
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
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
function checkWin(currectClass) {
  return winning_Combinations.some((combination) => {
    return combinations.every((index) => {
      return cellElements(index).classlist.contains(currentClass);
    });
  });
}
