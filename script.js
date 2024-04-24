'use strict';

///////////////////////////////////////
// Constructor Functions and the new Operator

// convention: constructor function always start with capital letter
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //    this.calcAge = function () {
  //      console.log(2041 - birthYear);
  //    };
};

const adel = new Person('adel', 2003);
console.log(adel);

// when call a function with "new" keyword 4 things happend behind the scene
// 1. New {} is created
// 2. function is called, and "this" point to {}
// 3. {} linked to prototype
// 4. function automatically return {}

const ali = new Person('Ali', 2001);
const jack = new Person('Jack', 1989);
console.log(ali, jack);

console.log(ali instanceof Person);

///////////////////////////////////////
// Prototypes

// every function has it's own prototype
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2032 - this.birthYear);
};

adel.calcAge();
jack.calcAge();

console.log(adel.__proto__);
console.log(adel.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(adel)); // true
console.log(Person.prototype.isPrototypeOf(jack)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = 'Homo Sepiens';
console.log(adel.species, jack.species);

console.log(adel.hasOwnProperty('firstName')); // true
console.log(adel.hasOwnProperty('species')); // false
