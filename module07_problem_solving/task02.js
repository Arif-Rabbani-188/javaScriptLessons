// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2
// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0

let numbers = [5, 6, 11, 12, 98, 5, 5, 10, 45, 55, 35];

function countRepeatedNumber(array, theNum) {
  let count = 0;
  for (let num of array) {
    if (num === theNum) {
      count++;
    }
  }

  return count;
}

let result = countRepeatedNumber(numbers, 5);

console.log(result);
