const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// let name;

const startGame = () => {
  // rl.question("Player name: ", (name) => {
  rl.question(`Enter a number (or type exit): `, (input) => {
    if (input === "exit") return rl.close();
    if (input % 2 === 0) {
      console.log("Even");
    } else {
      console.log("odd");
    }

    startGame();
  });
  // });
};

startGame();
