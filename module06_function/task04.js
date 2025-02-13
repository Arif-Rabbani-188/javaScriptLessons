// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

let binary = "100110111000101";

function count_zero(string) {
  let count = 0;
  for (let digit of string) {
    if (digit === "0") {
      count++;
    }
  }
  return count;
}

let result = count_zero(binary);

console.log(result);
