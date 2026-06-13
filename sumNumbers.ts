const sumNumbers = (numbers: number[]): number => {
  return numbers.reduce((acc, cur) => acc + cur, 0);
};

const total = sumNumbers([1, 2, 3, 4]);

console.log("Total: ", total);
