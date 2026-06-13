const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const countEven = (numbers: number[]): number => {
  const finalOuput: number[] = [];

  numbers.forEach((num) => {
    if (num % 2 === 0) finalOuput.push(num);
  });

  console.log("finalOuput: ", finalOuput);
  return finalOuput.length;
};

const data = countEven(values);

console.log("data: ", data);
