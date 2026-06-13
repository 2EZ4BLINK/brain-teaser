const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

type Student = {
  name: string;
  grade: number;
};

let students: Student[] = [];

const optOne = (modifiedInput: number): void => {
  console.clear();
  console.log(`Choose: ${modifiedInput}`);
  console.log("\n");

  rl.question("Student name: ", (student: string) => {
    rl.question("Grade: ", (grade: string) => {
      const studentGrade = Number(grade);

      students.push({
        name: student,
        grade: studentGrade,
      });

      console.log("Student Added!");
      console.clear();
      return playGame();
    });
  });
};

const optTwo = (modifiedInput: number) => {
  console.clear();
  console.log(`Choose: ${modifiedInput}`);
  console.log("\n");

  console.log("Students: ");

  students.forEach((student) => {
    console.log(`${student.name} - ${student.grade}`);
  });
  return playGame();
};

const optThree = (modifiedInput: number) => {
  console.clear();
  console.log(`Choose: ${modifiedInput}`);
  console.log("\n");

  console.log("Top Student: ");
  let highestGrade = students[0];

  for (let i = 0; i < students.length; i++) {
    if (students[i].grade > highestGrade.grade) highestGrade = students[i];
  }

  console.log(`${highestGrade?.name} - ${highestGrade?.grade}`);
  playGame();
};

const optFour = () => {
  console.log("Goodbye");
  rl.close();
};

const playGame = () => {
  console.log("\n");
  console.log("Students: ", students);

  rl.question(
    `
    1. Add Student
    2. View Students
    3. Find Top Student
    4. Exit
    
    Choose option: `,
    (input: string) => {
      const modifiedInput = Number(input);

      if (modifiedInput === 1) return optOne(modifiedInput);
      if (modifiedInput === 2) return optTwo(modifiedInput);
      if (modifiedInput === 3) return optThree(modifiedInput);
      if (modifiedInput === 4) return optFour();
    },
  );
};

playGame();
