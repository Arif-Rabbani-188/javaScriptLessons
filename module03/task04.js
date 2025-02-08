// Create different variables, each containing either an array or a non-array value.
var firstName = ['Arif', 'Shahadat', 'Jubaiyer'];
var age = 26;

// Now use isArray to check if each variable is an array.

console.log(Array.isArray(firstName));
// Output: true

console.log(Array.isArray(age));
// Output: false

// Print a message to the console indicating whether each variable is an array or not.
if(Array.isArray(firstName)){
    console.log("This is an Array");
}else{
    console.log("This is not an array.")
}
// Output: This is an Array

if(Array.isArray(age)){
    console.log("This is an Array");
}else{
    console.log("This is not an array.")
}
// Output: This is not an array