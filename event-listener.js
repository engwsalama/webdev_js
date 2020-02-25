// event listener
/* ===>
  - We e in the function to prevent any unexpected default action and take the control
- Add om href '#' , and 'http://www.google.com' and see the result with 
  e.preventDefault 
===>*/

// using addEventListener with unknown function
document.querySelector('.clear-tasks').addEventListener('click', function(e){
  console.log('Hello World');

  //e.preventDefault();
});

// using addEventListener with named function
document.querySelector('.clear-tasks').addEventListener('click', onClick);

// here we are focusing on e methods - target is very important element because it deals with the element which dealing with
function onClick(e){
  //console.log('Clicked');

  let val;

  val = e;

  // Event target element
  val = e.target; // when click on <h> element , it will appear in console.log
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // change the buttom text 
  e.target.innerText='Hello';

  // Event type
  val = e.type;  // here will show you what type of action such as click , mouseover,etc. but , you must determine the action in the above function paramter

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}