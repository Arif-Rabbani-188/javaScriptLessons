/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

// Solution:

// var age = 5;

// output: Free

var age = 15;

var student = true;

// output: 400 tk

// var age = 65;

// output: 680 tk

// var age = 25;

// output: 800 tk

if (age < 10) {
  console.log("Free");
} else if (age >= 10 && age < 60) {
    if (student === true) {
        console.log("400 tk");
    } else {
        console.log("800 tk");
    }
} else if (age >= 60) {
  console.log("680 tk");
} else {
    console.log("Invalid age.");
}