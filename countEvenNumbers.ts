const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const countEven = (numbers: number[]): number => {
  const finalOutput: number[] = [];

  numbers.forEach((num) => {
    if (num % 2 === 0) finalOutput.push(num);
  });

  console.log("finalOutput: ", finalOutput);
  return finalOutput.length;
};

const data = countEven(values);

console.log("data: ", data);

// Other way use filter
