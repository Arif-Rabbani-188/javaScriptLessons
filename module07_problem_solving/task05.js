// Task-5:
// Generate a random number between 10 to 20.

let randomNumber = Math.random()*10 + 10;

// Math.random() return 0-1 value
// *10 multiplay it and now return 0-10
// +10 added 10 to the value so it return 10-20

// console.log(Math.ceil(randomNumber));

function randomNumberGenerator(min, max){
    let number = Math.floor(Math.random()* (max - min) + min);

    return number;
}

let num = randomNumberGenerator(10,20);

console.log(num);