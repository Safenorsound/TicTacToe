const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const cellElements = document.querySelectorAll('board');
let circleTurn;

cellElements.forEach((cell) => {
  cell.addEventListener('click', handleClick, { once: true });
});

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

function setBoardHoverClass() {}
