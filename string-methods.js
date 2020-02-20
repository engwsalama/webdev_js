const firstName = 'Mostafa';
const lastName = 'Ahmed";
const age = 36;
const str = 'Hello there my name is Mostafa';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Yasser ';
val += 'Ahmed';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val =  'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;  // we did not put () because it is an property , but if it is a method will put ()

// concat()
val = firstName.concat(' ', lastName, first);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];  // get a character from string by index number

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt() , it is opposit of indexOf
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split()
val = str.split(' '); // here will convert string to array
val = tags.split(',');

// replace()
val = str.replace('Mostafa', 'Tamer');

// includes() 
val = str.includes('foo'); // gives true or false based on string existing or not 

console.log(val);