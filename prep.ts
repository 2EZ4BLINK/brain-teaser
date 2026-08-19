// Return only the numbers greater than 4.
const numbers = [5, 2, 8, 1, 9, 3];

const returnLargest = (numbers: number[]): number[] => {
  const largerThanFour = numbers.filter((i) => i > 4);

  console.log("largerThanFour: ", largerThanFour);

  return largerThanFour;
};

console.log("numbers: ", numbers);

returnLargest(numbers);
