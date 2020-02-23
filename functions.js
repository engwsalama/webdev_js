// FUNCTION DECLARATIONS
// difference between console.log () & return

function greet(firstName = 'Ahmed', lastName = 'Magdy'){
// the following two statment are using in case of undefined paramters in ES5
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  //console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}


// In case of using return
 console.log(greet());

// FUNCTION EXPRESIONS

const square = function(x = 3){
  return x*x;
};

 console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// Declared and run in the same time

 (function(){
   console.log('IIFE Ran..');
 })();

 (function(name){
   console.log('Hello '+ name);
 })('Samy');

// PROPERTY METHODS

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();f