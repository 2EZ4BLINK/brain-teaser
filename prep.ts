// Return only the numbers greater than 4.
const numbers = [5, 2, 8, 1, 9, 3];

const returnLargest = (numbers: number[]): number[] => {
  const largerThanFour = numbers.filter((i) => i > 4);

  return largerThanFour;
};

returnLargest(numbers);

// Return the numbers without duplicates.
const numbersTwo = [1, 2, 2, 3, 4, 4, 5, 5, 5];

const removeDuplicates = (numbers: number[]): number[] => {
  let noDuplicateNumbers: number[] = [];

  numbers.forEach((item) => {
    if (noDuplicateNumbers.includes(item)) return;

    noDuplicateNumbers.push(item);
  });

  return noDuplicateNumbers;
};

removeDuplicates(numbersTwo);

// Find the largest number.
const numbersThree = [10, 5, 8, 20, 3, 15];

const findLargestNumber = (numbersThree: number[]): number => {
  let largestNumber = numbersThree[0];

  for (let i = 0; i < numbersThree.length; i++) {
    if (largestNumber < numbersThree[i]) largestNumber = numbersThree[i];
  }

  return largestNumber;
};

findLargestNumber(numbersThree);
