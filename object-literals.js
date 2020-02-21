const person = {
  firstName: 'Smair',
  lastName: 'Ali',
  age: 36,
  email: 'samir@gmail.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Alex',
    country: 'EG'
  },
  getBirthYear: function(){
    return 2017 - this.age;
  }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.country;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
  {name: 'Ahmed', age: 30},
  {name: 'Yasser', age: 23},
  {name: 'Nancy', age: 40}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}