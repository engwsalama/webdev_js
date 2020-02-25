// Traversing -- means move up and down 
let val;

const list = document.querySelector('ul.collection'); // this for dealing with childern
const listItem = document.querySelector('li.collection-item:first-child');// this for dealing with parent

val = listItem;
val = list;

// Get child nodes
/* ===>
 - Child nodes will not return lis only , but will return text which is the line break between lis ,
 - It is better to use childern
===> */

val = list.childNodes; // here will return 11 nodes 
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes
val = list.children;  // here will return 5 which the actuall list of lis
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
list.children[3].children; 
list.children[3].children[0].id = 'test-link'; // here will add id for this childern
val = list.children[3].children[0]; // will give the link <a>

// First child
val = list.firstChild; // here will return text as childnode[0]
val = list.firstElementChild; // here will return first element which is <li>

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get prev sibling  -- means two or elements share same parent
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);