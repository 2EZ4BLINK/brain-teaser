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

// Best Approach
// const secondLargest = (numbers: number[]): number => {
//   let largest = numbers[0];

//   numbers.forEach((number) => {
//     if (number > largest) {
//       largest = number;
//     }
//   });

//   const filteredNumbers = numbers.filter((number) => number !== largest);

//   let secondLargest = filteredNumbers[0];

//   filteredNumbers.forEach((number) => {
//     if (number > secondLargest) {
//       secondLargest = number;
//     }
//   });

//   return secondLargest;
// };

// console.log(secondLargest([10, 5, 20, 8, 20, 15]));
