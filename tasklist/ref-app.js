// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners(){
  // Add task event
  form.addEventListener('submit',addTask)

  // Remove task event
  taskList.addEventListener('click',removeTask);

  // Clear tasks event
  clearBtn.addEventListener('click',clearTasks)
  
  // Filter tasks event
  filter.addEventListener('keyup',filterTasks);
  
}

// addTask Function
function addTask(e){
  if (taskInput.value === ''){
    alert('Add a Task');
  }else{
  
  // Create Li Element
    const li =document.createElement('li');

  // Add Class
    li.className ='collection-item'; // refer to materialized li classes
  
  // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

  // create new link element
    const link = document.createElement('a');

  // Add class
    link.className = 'delete-item secondary-content';
  
  // Add icon html
    link.innerHTML ='<i class="fa fa-remove"></i>';
  
  // Append the link to li
    li.appendChild(link);

  // Append li to ul
    taskList.appendChild(li);
  
  //Clear input
   taskInput.value = ''; 
      
  }
  e.preventDefault();
}


function removeTask(e){
  if (e.target.parentElement.classList.contains('delete-item')){
    if (confirm('Are you sure')){
      e.target.parentElement.parentElement.remove();
    }
  }
}

function clearTasks(e){
  if (confirm('Are you sure')){
    // taskList.remove();
    // taskList.innerHTML=''; // could be done to clear all tasks
    
    while(taskList.firstChild){
      taskList.removeChild(taskList.firstChild)
    }
  }
}

function filterTasks(e){
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1 ){
      task.style.display='block';
    }else{
      task.style.display='none';
    }

  })
  
  
}






