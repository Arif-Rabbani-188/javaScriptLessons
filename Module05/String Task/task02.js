// Count how many times a string has the letter 'a' or 'A'

let sentence = 'My name is Arif Rabbani. I love to eat banana. Give me some banana.';
let count = 0;


for( i = 0; i < sentence.length; i++){
    if(sentence[i] === 'a' || sentence[i] === 'A'){
        count++;
    }
}

console.log(count);