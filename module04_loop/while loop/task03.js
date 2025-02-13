/* Subtask-1: Display sum of all the odd numbers from 81 to 131. */

let sum = 0;
let i = 81;

while (i <= 131) {
  sum += i;
  i += 2;
}

console.log("sum=", sum);

/* Subtask-2: Display sum of all the even numbers from 206 to 311. */

i = 206;

while (i <= 311) {
  sum += i;
  i += 2;
}

console.log("sum=", sum);
