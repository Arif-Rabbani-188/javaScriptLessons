// Check whether a string contains all the vowels 'a', 'e', 'i', 'o', 'u'

let sentence =
  "My name is Arif Rabbani. I love to eat banana. Give me some banana.";
let count = 0;

for (i = 0; i < sentence.length; i++) {
  if (sentence[i] === "a") {
    count++;
  }
}
if (count > 0) {
  console.log("String contain all the vowels.");
} else {
  console.log("String does not contain all the vowels.");
}
