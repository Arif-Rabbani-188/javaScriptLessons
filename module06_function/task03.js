// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

let numbers = [1, 2, 4, 6, 7, 10, 8, 22, 77];

function make_avg(nums) {
  let num;
  let sum = 0;
  let n = nums.length;
  for (num of nums) {
    sum = sum + num;
  }
  return sum / n;
}

let result = make_avg(numbers);

console.log(result);
