const isPalindrome = (word: string): boolean => {
  let reversed: string[] = [];

  for (let i = word.length - 1; i >= 0; i--) {
    reversed.push(word[i]);
  }

  return word === reversed.join("");
};

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
