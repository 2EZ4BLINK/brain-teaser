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
// const getSecondLargest = (numbers: number[]): number | undefined => {
//   let largest = -Infinity;
//   let secondLargest = -Infinity;

//   for (const number of numbers) {
//     if (number > largest) {
//       secondLargest = largest;
//       largest = number;
//     } else if (number > secondLargest && number < largest) {
//       secondLargest = number;
//     }
//   }

//   return secondLargest === -Infinity ? undefined : secondLargest;
// };

// console.log(getSecondLargest([10, 5, 20, 8, 20, 15]));
