// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

let electronics = [
  {
    name: "laptop",
    price: 35000,
  },
  {
    name: "mobile",
    price: 20000,
  },
];

function calculateElectronicsBudget(products) {
  let total = 0;
  for (let product of products) {
    total = total + product.price;
  }
  return total;
}

let totalPrice = calculateElectronicsBudget(electronics);

console.log("Total money required: ", totalPrice);
