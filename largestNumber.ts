const values = [3, 7, 2, 20, 9, 5];
const findLargest = (numbers: number[]): number => {
  let final = numbers[0];

  numbers.forEach((num) => {
    if (num > final) final = num;
  });

  // Shortest way
  // let final = Math.max(...values);

  return final;
};

const data = findLargest(values);
console.log("Data: ", data);
