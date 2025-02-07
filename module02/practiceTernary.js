// Write a code is a student collegiate or non-collegiate. If one have more than or equal to 75% then he/she is a collegiate student otherwise non-collegiate..

var attendance =75;

var status = attendance >= 75 ? 'collegiate' : 'non-collegiate';

console.log("Status:", status);




// collegiate or non-collagiate
// if a student get more then or equal to 75% then he/she is a collegiate student else he/she is non-collegiate student.For a normal collegiate student the form fillup fee is 1500 taka.. If he/she is non-collegiate charge a additional fee of 500 taka.  write the code.. using ternary..


// Solution:


var formFillUpAmount = 1500;
var additionalFee = 500;

var totalFee = status === 'collegiate' ? formFillUpAmount : formFillUpAmount + additionalFee;

console.log(totalFee);