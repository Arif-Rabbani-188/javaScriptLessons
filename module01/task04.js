// What will be the result of the following codes:

// var a = isNaN(‘11’);

// var a = isNaN(2-10);

// Explain your answers.

// Answer:

var number = 11;

console.log(number);

let a = isNaN('2025');

console.log(a);

// output: false

// isNaN("37"); // false: "37" is converted to the number 37 which is not NaN
// isNaN("37.37"); // false: "37.37" is converted to the number 37.37 which is not NaN
// From MDN Web Docs

a = isNaN(2-10);

console.log(a);

// output: false

// The isNaN() function determines whether a value is NaN or not. It returns true if the value is NaN, otherwise it returns false.