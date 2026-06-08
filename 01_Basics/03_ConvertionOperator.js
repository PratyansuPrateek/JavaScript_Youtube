let score = "happy"
let scoreNumber = Number(score)
// console.log(scoreNumber);
// console.log(typeof scoreNumber);

/*
    If we want to conver one data type to another like any other data type to number just we need to do Number() 
    like this only we can conver any thing to anything like String(), Boolean(), etc.

    if we want to conver null, empty string value then value became 0 like other to conver undefine/String/number + String it became 
    NaN(Not a Number) but the type of it is Number only 
*/

let number = -1245
let numberBoolean = Boolean(number)

// console.log(numberBoolean);
// console.log(typeof numberBoolean);


let name = "Happy"
let nameBoolean = Boolean(name)
// console.log(nameBoolean);
// console.log(typeof nameBoolean);

/*
    here we want to conver the number like 0 and 1 or bigger then one it will false and true
    like to conver string to boolean then if empty string then false and for normal string it will be true
*/


// ************** Operation *****************

//  1. Arithmetic operator

// console.log(2+2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2); Square of first number 
// console.log(2%2);

// console.log(+true); // 1 
// console.log(+false); //0

/*The unary plus (+) operator converts its operand into a number.
 In JavaScript, true becomes 1 and false becomes 0 during numeric conversion.
*/

console.log("1" + 2 + 2); // when we do then it will take every thing as a String because in first operation happening concatination o/p: 122
console.log(1+2+"2"); // but here first operation is happening addition then conscatination so result is o/p: 32




