const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const board = Array(9).fill(" ");

let currentPlayer = "X";

function printBoard() {
  console.log(`
 ${board[0]} | ${board[1]} | ${board[2]}
-----------
 ${board[3]} | ${board[4]} | ${board[5]}
-----------
 ${board[6]} | ${board[7]} | ${board[8]}
`);
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winningCombinations) {
    const [a, b, c] = combo;

    if (board[a] !== " " && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }

  return null;
}

function isDraw() {
  return !board.includes(" ");
}

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function playTurn() {
  printBoard();

  rl.question(`Player ${currentPlayer}, enter position (1-9): `, (input) => {
    const position = Number(input) - 1;

    if (position < 0 || position > 8 || Number.isNaN(position)) {
      console.log("Invalid position.");
      return playTurn();
    }

    if (board[position] !== " ") {
      console.log("Position already taken.");
      return playTurn();
    }

    board[position] = currentPlayer;

    const winner = checkWinner();

    if (winner) {
      printBoard();
      console.log(`Player ${winner} wins!`);
      rl.close();
      return;
    }

    if (isDraw()) {
      printBoard();
      console.log("Game ended in a draw.");
      rl.close();
      return;
    }

    switchPlayer();
    playTurn();
  });
}

console.log("=== TIC TAC TOE ===");
console.log(`
Positions:

 1 | 2 | 3
-----------
 4 | 5 | 6
-----------
 7 | 8 | 9
`);

playTurn();
