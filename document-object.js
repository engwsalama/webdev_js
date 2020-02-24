// Document-object.js
// Explore the Document object with its attributes

let val;

val = document; // when select val in console output will highlighted the entire document
val = document.all;  // this will display document content in array... refer to index.html file to compare the array content with document elements
val = document.all[2];
val = document.all.length; // this will show how many elements in document ... try to delete any element from html and run this command again the length will decrease by one 
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// select element without using selector ... Not Recommended
val = document.forms;
val = document.forms[0]; // if you type forms[1] ...will return undefined as there is only one form
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];  // in the console hover it to reflect on exact element
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0]; /// classList only will list all classes for this element

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

// to iterate through elements 
let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);