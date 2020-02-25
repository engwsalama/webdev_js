
// FOR LOOP


// WHILE LOOP


// DO WHILE


// LOOP THROUGH ARRAY


// FOREACH


// MAP
/* ===> 
  The map() method creates a new array with the results of calling a function for every array element.
===>*/

const users = [
  {id:1,name:'wael'},
  {id:2,name:'ali'},
  {id:3,name:'smair'},
  {id:4,name:'ahmed'},
];
const ids=users.map(function(user){
  return user.id
});
console.log(ids)




// FOR IN LOOP
