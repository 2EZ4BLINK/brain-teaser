const board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const drop = (board: number[][], col: number, player: number): number[][] => {
  for (let row = board.length - 1; row >= 0; row--) {
    if (board[row][col] === 0) {
      board[row][col] = player;
      break;
    }
  }

  return board;
};

const result = drop(board, 1, 2);
console.log(result);
