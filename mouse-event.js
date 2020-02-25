// Mouse Event
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);

// Doubleclick
clearBtn.addEventListener('dblclick', runEvent);

// Mousedown - click and hold
clearBtn.addEventListener('mousedown', runEvent);

// Mouseup
clearBtn.addEventListener('mouseup', runEvent);

/* ===> 
  The mouseleave and mouseenter deal with the initial element 
==>*/

// Mouseenter - just like hover
card.addEventListener('mouseenter', runEvent);

// Mouseleave - opposite of mouseenter
card.addEventListener('mouseleave', runEvent);

/* ===> 
  The mouseover and mouseout deal with the element within the initial element 
==>*/

// Mouseover
card.addEventListener('mouseover', runEvent);

// Mouseout
card.addEventListener('mouseout', runEvent);

// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  // the following two commands will by with mouseover event
  heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}