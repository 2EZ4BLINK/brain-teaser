// node wordFrequencyMap

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const getWordFrequency = (strings: string[]): Record<string, number> => {
  const data = strings.reduce((acc: Record<string, number>, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  return data;
};

const data = getWordFrequency(words);

console.log("Data: ", data);
