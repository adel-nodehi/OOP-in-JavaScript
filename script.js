'use strict';

/* // Constructor function

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

///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(adel.__proto__);
// Object.prototype (top of prototype chain)
console.log(adel.__proto__.__proto__);
console.log(adel.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);
*/

///////////////////////////////////////
// ES6 Classes

class PersonCl {
  constructor(firstname, birthYear) {
    this.firstname = firstname;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1998);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstname}`);
};
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode
