// Person Constructor
function Person(firstName,lastName){
	this.firstName=firstName;
	this.lastName = lastName;
}

Person.prototype.greeting = function(){
	return `Hello there ${this.firstName} ${this.lastName}`
}
person1 = new Person('Ahmed','Mohamed');

// console.log(person1.greeting())

// Customer Constructor

function Customer(firstName,lastName,phone,membership){
	Person.call(this,firstName,lastName);

	this.phone=phone;
	this.membership = membership;
}

// Inherit the Person prototype methods 

Customer.prototype = Object.create(Person.prototype);

// Make 
Customer.prototype.constructor=Customer;

// Create customer
const customer1 = new Customer('Yasser','Zakaria','333-333-333','Gold');

console.log(customer1)

// Customer greeting 
Customer.prototype.greeting= function(){
	return `Hello there ${this.firstName} ${this.lastName} welcome to our company`
}
console.log(customer1.greeting())