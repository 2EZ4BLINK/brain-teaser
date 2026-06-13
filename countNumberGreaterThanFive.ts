const arrayValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const countGreaterThanFive = (numbers: number[]): number => {
  const valuesGreaterThanFive = numbers.filter((num) => num > 5);

  console.log("Numbers greater than 5: ", valuesGreaterThanFive);

  return valuesGreaterThanFive.length;
};

const dataOutput = countGreaterThanFive(arrayValues);

console.log("dataOutput: ", dataOutput);
