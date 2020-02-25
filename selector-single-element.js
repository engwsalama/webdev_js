// Select single element

/* =====>
Not recommended to use jquery for DOM manipulation , except in case of using with plugin such as bootstrap , etc.
As by using Jquery will load the browser loading 
========>*/


/* ===>
when use select element by class , the return value will be the first element in this class 
===>*/

// document.getElementById()

// console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// professional way to call an element

const taskTitle = document.getElementById('task-title');

// Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
taskTitle.style.display = 'none';

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';


// document.querySelector() 
/*- It is newer and more powerful in usage
  - You use it to select anything regardless id , name , class,etc.
  - It is act like jquery
  - When call class use (.)
  - When call ID use (#)
*/

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';  // it is single element select
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red'; // by using pseudo-class
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// the following will not working properly because this selector is applied for the first element , althoguh using querySelectorAll()

document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';



