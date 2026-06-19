type Player = 1 | 2;
type Board = number[][];

const ROWS = 6;
const COLS = 7;

const createBoard = (): Board =>
  Array.from({ length: ROWS }, () => Array.from({ length: COLS }, () => 0));

const printBoard = (board: Board) => {
  console.log("\n");
  for (const row of board) {
    console.log(row.map((v) => (v === 0 ? "." : v)).join(" "));
  }
  console.log("\n");
};

// Drop piece with gravity
const dropPiece = (board: Board, col: number, player: Player): boolean => {
  for (let row = ROWS - 1; row >= 0; row--) {
    if (board[row][col] === 0) {
      board[row][col] = player;
      return true;
    }
  }
  return false; // column full
};

// Check win
const checkWin = (board: Board, player: Player): boolean => {
  // directions: right, down, diag down-right, diag down-left
  const dirs = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1],
  ];

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r][c] !== player) continue;

      for (const [dr, dc] of dirs) {
        let count = 0;

        for (let i = 0; i < 4; i++) {
          const nr = r + dr * i;
          const nc = c + dc * i;

          if (
            nr < 0 ||
            nr >= ROWS ||
            nc < 0 ||
            nc >= COLS ||
            board[nr][nc] !== player
          ) {
            break;
          }

          count++;
        }

        if (count === 4) return true;
      }
    }
  }

  return false;
};

// Game loop (simple CLI version)
const play = () => {
  const board = createBoard();
  let player: Player = 1;

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = () => {
    printBoard(board);

    readline.question(
      `Player ${player}, choose column (0-6): `,
      (input: string) => {
        const col = Number(input);

        if (col < 0 || col >= COLS || isNaN(col)) {
          console.log("Invalid column");
          return ask();
        }

        const success = dropPiece(board, col, player);

        if (!success) {
          console.log("Column full!");
          return ask();
        }

        if (checkWin(board, player)) {
          printBoard(board);
          console.log(`Player ${player} wins! 🎉`);
          return readline.close();
        }

        player = player === 1 ? 2 : 1;
        ask();
      },
    );
  };

  ask();
};

play();
