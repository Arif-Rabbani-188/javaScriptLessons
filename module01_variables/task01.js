// Task-1
// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

// Input:
// The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

// Output:
// Print the result.

// Sample Input:
// 1000
// 700

// Sample Output:
// 300

// Code:

var totalMoney = 2000;
var remainingMoney = 0;
var applePricePerKG = 100;
var orangePricePerKG = 200;

// I buy apples 3 KG and oranges 2 KG

var totalPrice = (applePricePerKG * 3) + (orangePricePerKG * 2);

remainingMoney = totalMoney - totalPrice;

console.log(remainingMoney);


//output: 1300