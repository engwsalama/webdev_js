// Keyboard event
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

form.addEventListener('submit', runEvent);

// Keydown
taskInput.addEventListener('keydown', runEvent);

// Keydown
taskInput.addEventListener('keyup', runEvent);

// Keypress
taskInput.addEventListener('keypress', runEvent);

// Focus - click on the element
taskInput.addEventListener('focus', runEvent);

// Blur -- opposite of focus event , you should click out the element to fire blur event
taskInput.addEventListener('blur', runEvent);

// Cut -- fire with cut and ^x
taskInput.addEventListener('cut', runEvent);

// Paste - fire with paste and ^v
taskInput.addEventListener('paste', runEvent);

// Input - cover any working on the element such as cut, paste , typing
taskInput.addEventListener('input', runEvent);

// Change
/*==========>
to test this create a select element in html file 
<select>
  <option value='1'>1</option>
  <option value='2'>2</option>
  <option value='3'>3</option>
</select>
disable materalized in head section to show select
==========>*/

select.addEventListener('change', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value);// this will catch what are you typing and display in the consol.log()

   heading.innerText = e.target.value; // this will display what are you typeing in the heading variable which is <h5> element

  // Get input value
  // console.log(taskInput.value);

  e.preventDefault();
}