/* (1)
    - Undefined : A variable is said to be ‘undefined’ if it has been declared, but no value has been given to it
     implicity assign
    {
        let item;
        console.log(item); .... show null       
    }
    
    - Null: ‘null’ is a value that can be assigned to a variable and represents ‘no value’.
    
    explicity assign
    {
        let item=null;
        console.log(item); .... show null
    }   
*/
const name='Mostafa';
const age=30;
const grade= 4.5;
const isEgy=true;
const x = null;
const y=undefined; //it is the same as let y;
let item;
console.log(item);

// (2) knowing the variable type
console.log(typeof isEgy);
console.log(typeof age);
console.log(typeof grade);