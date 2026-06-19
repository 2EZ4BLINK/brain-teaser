const readlineInterview = require("readline");

const rlInterview = readlineInterview.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const createGrid = (rows: number, cols: number): number[][] => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => 0),
  );
};
const gridResult = createGrid(4, 5);

let [one, two, three, four, five] = gridResult[0];
let [six, seven, eight, nine, ten] = gridResult[1];
let [eleven, twelve, thirteen, fourteen, fifteen] = gridResult[2];
let [sixteen, seventeen, eighteen, nineteen, twenty] = gridResult[3];

const format = (n: number) => String(n).padStart(2, " ");

let playerRole: number;

const player = (player: number) => {
  const playerTurn = player === 1 ? (playerRole = 2) : (playerRole = 1);
  return playerTurn;
};

const board = () => {
  console.log(`
 ${format(one)} | ${format(two)} | ${format(three)} | ${format(four)} | ${format(five)}
----|----|----|----|----
 ${format(six)} | ${format(seven)} | ${format(eight)} | ${format(nine)} | ${format(ten)}
----|----|----|----|----
 ${format(eleven)} | ${format(twelve)} | ${format(thirteen)} | ${format(fourteen)} | ${format(fifteen)}
----|----|----|----|----
 ${format(sixteen)} | ${format(seventeen)} | ${format(eighteen)} | ${format(nineteen)} | ${format(twenty)}
`);
};

const playGameConnect = () => {
  board();

  rlInterview.question(
    `Choose tile player ${player(playerRole) || "1"}: `,
    (input: string) => {
      const modifiedInput = Number(input);

      if (modifiedInput === 1) one = playerRole;
      if (modifiedInput === 2) two = playerRole;
      if (modifiedInput === 3) three = playerRole;
      if (modifiedInput === 4) four = playerRole;
      if (modifiedInput === 5) five = playerRole;
      if (modifiedInput === 6) six = playerRole;
      if (modifiedInput === 7) seven = playerRole;
      if (modifiedInput === 8) eight = playerRole;
      if (modifiedInput === 9) nine = playerRole;
      if (modifiedInput === 10) ten = playerRole;

      if (one === two && two === three && three === four) {
        console.log(`Winner: ${one}`);
        rlInterview.close();
      }
      playGameConnect();
    },
  );
};

playGameConnect();
