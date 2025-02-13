// Create an array of books containing different book.
var books =['Eat That Frog', 'Productive Muslim', 'Rich dad poor dad'];

// Use the includes method to check if the array contains a javascript book.
console.log(books.includes('Productive Muslim'));
// output: true

console.log(books.includes('Himu'));
// output: false

// Print a message to the console indicating whether the element is present in the array or not.

if(books.includes('Productive Muslim')){
    console.log('The book is in the list');
}else{
    console.log('The book is not in the list');
}