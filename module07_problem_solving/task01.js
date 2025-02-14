// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celsius(temp) {
  let fahrenheit = (temp * 9) / 5 + 32;

  return fahrenheit;
}

let temperature = celsius(100);

console.log(temperature);
