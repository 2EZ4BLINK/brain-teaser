const values = [1, 2, 3, 4, 5];

const sumNumbers = (numbers: number[]): number => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

const data = sumNumbers(values);
console.log("Data: ", data);
