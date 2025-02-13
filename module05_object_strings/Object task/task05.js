// Loop through an object and print the key-value pairs with their types

// Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

for(let prop in myObject){
    console.log('Key:', prop, '| type: ', typeof(myObject[prop]));  //myObject[prop] ----> return the value of the property
}
