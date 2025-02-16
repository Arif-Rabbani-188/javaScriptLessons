// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];
let max = heights2[0];

for (let word of heights2) {
  if (word.length > max.length) {
    max = word;
  }
}

console.log(max);
