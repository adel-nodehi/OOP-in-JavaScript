'use strict';

///////////////////////////////////////
// Constructor Functions and the new Operator

// convention: constructor function always start with capital letter
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //    this.printAge = function () {
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
