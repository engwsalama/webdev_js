//Block Scope with let and const

// (1) Global Scope - not inside any object or function 
var a = 1;
let b = 2;
const c = 3;



// (2) function scope 

// function test() {
//   // these are seperate variables because there are in different scope
//   // here the behavior of var is normal 
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }

// test();

// (3) Block Scope - if 
// if(true) {
//   // Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If Scope: ', a, b, c);
// }

// (4) Block Scope - loop
// here use let and var to see that var will change the value 
for(let a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a,b,c);
