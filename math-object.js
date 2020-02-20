const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI; // object has property (attribute ) and method (function)
val = Math.round(2.4);
val = Math.ceil(2.4); // round to up
val = Math.floor(2.8); // round to down
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2,33,4,1,55,6,3,-2);
val = Math.max(2,33,4,1,55,6,3,-2);
val = Math.random(); // gives a random decicmal

val = Math.floor(Math.random() * 20 + 1); // 20 is the max number you can reach plus 1, use floor to get an integer number 

console.log(val);