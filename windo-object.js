// WINDOW METHODS / OBJECTS / PROPERTIES

//Nodejs make your computer system is your global env.
// in js clinet window is the global env 
// Alert
alert('Hello World');

// Prompt
const input = prompt();
alert(input);

// Confirm
if(confirm('Are you sure')){
  console.log('YES');
} else {
  console.log('NO');
}

let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
/* ===>
The read-only scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically
===>*/
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; // in url 5500/?id=1 &name='ahmed'&member='std' , this will appear in location.search

// Redirect
window.location.href = 'http://google.com';

//Reload
window.location.reload();

// History Object

window.history.go(-2); // -1 will go the previous site , -2 previous previous one 

val = window.history.length; // get how many sites behind the current

// Navigator Object
// this work with browser itself not window object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;



console.log(val);