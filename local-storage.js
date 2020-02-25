// set local storage item -- item is removed by type clear()
localStorage.setItem('name', 'Ahmed');
localStorage.setItem('age', '30');

// set session storage item -- item is removed by closing broswer
sessionStorage.setItem('name', 'Yasser');

// remove from storage
localStorage.removeItem('name');

// get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

// clear local storage
localStorage.clear();

console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;
  
  alert('Task saved');

  e.preventDefault();
});

