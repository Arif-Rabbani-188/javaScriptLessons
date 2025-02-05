// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04

// Code:

var mathMarks = 75.25;
var bioMarks = 65;
var chemMarks = 80;
var phyMarks = 35.45;
var banglaMarks = 99.50;

var totalMarks = mathMarks + bioMarks + chemMarks + phyMarks + banglaMarks;

var averageMarks = totalMarks / 5;

console.log(averageMarks.toFixed(2));

//output: 71.04