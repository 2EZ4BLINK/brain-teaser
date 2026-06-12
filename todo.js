const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userInput;
const tasks = [];

const optOne = () => {
  rl.question(
    `
        Choose: ${userInput}

        Enter Task: `,
    (input) => {
      if (!input) {
        console.clear();
        console.log("Empty task not allowed");
        return optOne();
      }
      tasks.push(input);
      console.log("Task Added");
      return startGame();
    },
  );
};

const optTwo = () => {
  console.clear();
  console.log("Tasks:");

  tasks.forEach((task) => {
    console.log(`Task ${task}`);
  });
  return startGame();
};

const optThree = () => {
  console.clear();

  rl.question(
    `
        Choose: ${userInput}

        Enter Task Number: `,
    (input) => {
      tasks.splice(input - 1, 1);
      console.log(`Task ${input} deleted`);
      return startGame();
    },
  );
};

const optFour = () => {
  console.log(`
    Choose: ${userInput}

    Goodbye
    `);
  rl.close();
};

const startGame = () => {
  rl.question(
    `
    1. Add Task
    2. View Tasks
    3. Delete Task
    4. Exit
        
    Choose Menu: `,
    (input) => {
      console.clear();
      userInput = input * 1;

      if (userInput === 1) optOne();
      if (userInput === 2) optTwo();
      if (userInput === 3) optThree();
      if (userInput === 4) optFour();
    },
  );
};

startGame();
