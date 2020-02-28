// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('.filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners(){
  // Add task event

  form.addEventListener('submit',addTask)

  // Remove task event
  taskList.addEventListener('click',removeTask);
  
}

// addTask Function
function addTask(e){

  if (taskInput.value === ''){
    alert('Add a Task')
  }

  // Create Li Element
  const li =document.createElement('li');
  // Add Class
  li.className ='collection-item' // refer to materialized li classes
  
  // Create text node and append to li

  li.appendChild(document.createTextNode(taskInput.value));

  // create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML ='<i class="fa fa-remove"</i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  //Clear input
  taskInput.value = ''; 







  e.preventDefault();
}