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

/*
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

  get age() {
    return 2037 - this.birthYear;
  }

  // Set property that already exist
  set firstname(name) {
    if (name.includes(' ')) this._firstname = name;
    else alert(`${name} is not valid`);
  }

  get firstname() {
    return this._firstname;
  }

  // Static methods: only available on PersonCl class not it's prototype
  static hey() {
    console.log('hey there 👋');
  }
}

const jessica = new PersonCl('Jessica Davis', 1998);
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

const walter = new PersonCl('Walter White', 1965);

///////////////////////////////////////
// Setters and Getters

const account = {
  owner: 'adel',
  movements: [250, 300, 800, 150],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // get

account.latest = 50; // set
console.log(account.movements);

console.log(jessica.age);

// Static method

PersonCl.hey();
// jessica.hey();
*/

/*
///////////////////////////////////////
// Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init: function (firstname, birthYear) {
    this.firstname = firstname;
    this.birthYear = birthYear;
  },
};

const stiven = Object.create(PersonProto);
console.log(stiven);
stiven.name = 'Stiven';
stiven.birthYear = 1996;
stiven.calcAge();

console.log(stiven.__proto__ === PersonProto);

const sara = Object.create(PersonProto);
sara.init('Sara', 1992);
sara.calcAge();
*/

/*
///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Add before write any method
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I'm study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');

mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
console.log(mike);
*/

///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set property that already exist
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not valid`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static methods: only available on PersonCl class not it's prototype
  static hey() {
    console.log('hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I'm study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha jones', 2012, 'Computer Science');

martha.introduce();
martha.calcAge();
console.log(martha);
