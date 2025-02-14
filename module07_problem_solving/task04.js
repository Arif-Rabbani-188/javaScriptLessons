// Task-4:
// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer
// sample-output: Programming

// let text = "I am learning Programming to become a programmer";

let text = "I can provide you with supplies for the trip";

function largestWord(sentence) {
  let words = sentence.split(" ");
  let valueLengthOfWords = [];
  let count = 0;
  let max = 0;
  let index = 0;

  for (let word of words) {
    count = word.length;
    valueLengthOfWords.push(count);
  }

  for (num of valueLengthOfWords) {
    if (max <= num) {
      max = num;
      index = valueLengthOfWords.indexOf(num);
    }
  }

  return words[index];
}

let theLargestWordIs = largestWord(text);

console.log(theLargestWordIs);
