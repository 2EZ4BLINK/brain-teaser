// node countOccurence.ts

const words = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
  "apple",
  "mango",
];
const target = "apple";

const countWordOccurrences = (strings: string[]): number => {
  let count = 0;

  strings.forEach((word) => {
    if (word === target) count++;
  });

  return count;
};

const data = countWordOccurrences(words);
console.log(`${target} appears ${data} times`);
