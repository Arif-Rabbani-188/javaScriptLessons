// What will be the result of the following codes:

// var a = isNaN(‘11’);

// var a = isNaN(2-10);

// Explain your answers.

// Answer:

var a = isNaN('11');

console.log(a);

// output: false

var a = isNaN(2-10);

console.log(a);

// output: false

// The isNaN() function determines whether a value is NaN or not. It returns true if the value is NaN, otherwise it returns false.