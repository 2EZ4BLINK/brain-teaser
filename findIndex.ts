const indexes = [1, 6, 7, 10, 5, 9];
const targetIndex = 11;

const findIndex = (numbers: number[]) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === targetIndex) return [i, j];
    }
  }
};

const finalDataIndex = findIndex(indexes);

console.log("finalDataIndex: ", finalDataIndex);
