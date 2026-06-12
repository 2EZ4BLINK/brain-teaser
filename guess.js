const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = Math.floor(Math.random() * 10) + 1;

const startGame = () => {
  rl.question("Guess a number (1-10): ", (input) => {
    if (Number(input) === randomNumber) {
      console.log("Correct!");
      rl.close();
      return;
    } else if (Number(input) < randomNumber) {
      console.log("Too low");
    } else if (Number(input) > randomNumber) {
      console.log("Too high");
    }
    startGame();
  });
};

startGame();
