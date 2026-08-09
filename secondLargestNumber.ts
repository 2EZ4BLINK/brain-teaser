const secondLargest = (numbers: number[]): number => {
  let largest = 0;
  let secondLargest = 0;

  numbers.forEach((number) => {
    largest = number > largest ? number : largest;
  });

  const filteredNumber = numbers.filter((num) => num !== largest);

  filteredNumber.forEach((number) => {
    secondLargest = number > secondLargest ? number : secondLargest;
  });

  return secondLargest;
};

const largestNumber = secondLargest([10, 5, 20, 8, 20, 15]);
console.log("Data: ", largestNumber);
