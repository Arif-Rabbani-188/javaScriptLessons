// Task-3:
// Write a function to count the number of vowels in a string.

let word = 'aeiousdfgsdgsdfgsdae';

function countVowels(string){
    let capString = string.toUpperCase();
    let count = 0;
    for(let letter of capString){
        if(letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U'){
            count ++;
        }
    }

    return count;
}

let result = countVowels(word);

console.log(result);