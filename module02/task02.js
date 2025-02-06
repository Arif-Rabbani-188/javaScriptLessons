/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// Solution:

// var weight = 70; // in kg

// output: You are normal.

// var weight = 100; // in kg

// output: You are obese.

// var weight = 80; // in kg

// output: You are overweight.

var weight = 50; // in kg

// output: You are underweight.

var height = 1.75; // in meters

var bmi = weight / (height * height);

if (bmi < 18.5) {
  console.log("You are underweight.");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("You are normal.");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("You are overweight.");
} else {
  console.log("You are obese.");
}
