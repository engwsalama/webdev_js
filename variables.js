//(1) var, let, const

    var name = 'John Doe';
    console.log(name);
    name = 'Steve Smith';
    console.log(name);

// (2) Init var

    var greeting;
     console.log(greeting);
     greeting = 'Hello';
    console.log(greeting);


// (3) letters, numbers, _, $
  Can not start with number


// (4) Multi word vars

     var firstName = 'John'; // Camel case
     var first_name = 'Sara'; // Underscore
     var FirstName = 'Tom'; // Pascal case
     var firstname;


// (5) LET

     let name;
     name = 'John Doe';
     console.log(name);
     name = 'Steve Smith';
     console.log(name);


// (6) CONST
  const name = 'John';
  console.log(name);
  
//==>  Can not reassign
      name = 'Sara';
     
//==> Have to assign a value
     const greeting;

// change value nor re-assign
    const person = {
     name: 'John',
     age: 30
     } 
   
     person.name = 'Sara';
     person.age = 32;  
     console.log(person);
     
const numbers = [1,2,3,4,5];
numbers.push(6);  
console.log(numbers);

    
