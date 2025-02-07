// collegiate or non-collagiate
// if a student get more then or equal to 75% then he/she is a collegiate student else he/she is non-collegiate student. write the code.. using ternary..


// Solution:

var formFillUpAmount = 1500;
var additionalFee = 500;
var attendance = 72;

var totalFee = attendance >= 75 ? formFillUpAmount : formFillUpAmount + additionalFee;

console.log(totalFee);