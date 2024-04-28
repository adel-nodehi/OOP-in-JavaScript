/* // 02 CHALLENGE #3

const dolphinsAverage1 = (96 + 108 + 89) / 3;
const koalaAverage1 = (88 + 91 + 110) / 3;
const dolphinsAverageBonus1 = (97 + 112 + 101) / 3;
const koalaAverageBonus1 = (109 + 95 + 123) / 3;
const dolphinsAverageBonus2 = (97 + 112 + 101) / 3;
const koalaAverageBonus2 = (109 + 95 + 106) / 3;

if (dolphinsAverage1 > koalaAverage1) {
  console.log("Dolphins win!");
} else if (dolphinsAverage1 < koalaAverage1) {
  console.log("Koala win!");
} else {
  console.log("bouth win  equal");
}

if (dolphinsAverageBonus1 > koalaAverageBonus1 && dolphinsAverageBonus1 > 100) {
  console.log("Dolphins win!");
} else if (
  dolphinsAverageBonus1 < koalaAverageBonus1 &&
  koalaAverageBonus1 > 100
) {
  console.log("Koala win!");
} else {
  console.log("bouth win  equal");
}

if (dolphinsAverageBonus2 > koalaAverageBonus2 && dolphinsAverageBonus2 > 100) {
  console.log("Dolphins win!");
} else if (
  dolphinsAverageBonus2 < koalaAverageBonus2 &&
  koalaAverageBonus2 > 100
) {
  console.log("Koala win!");
} else if (
  dolphinsAverageBonus2 === koalaAverageBonus2 &&
  dolphinsAverageBonus2 > 100 &&
  koalaAverageBonus2 > 100
) {
  console.log("equal");
} else {
  console.log("no winner");
}
*/

/* // 02 CHALLENGE #4
 

  const billValue = 275.4; // 430

  const tipPercent = billValue >= 50 && billValue <= 300 ? 0.15 : 0.2;
  const tipValue = billValue * tipPercent;

  console.log(`Bill value : ${billValue}
  Tip value : ${tipValue}
  Total : ${billValue + tipValue}`);
*/

'use strict';

/* // 03 CHALLENGE #1
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No winner (${avgKoalas} vs. ${avgDolphins}).`);
  }
}

const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoala = calcAverage(65, 54, 49);

checkWinner(avgDolphins, avgKoala);

// Test 1

avgDolphins = calcAverage(85, 54, 41);
avgKoala = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoala);
*/

/* // 03 CHALLENGE #2

const calcTip = function (billValue) {
  // const tipPercent = billValue > 50 && billValue < 300 ? .15 : .2;
  // return billValue * tipPercent;

  return billValue > 50 && billValue < 300 ? billValue * 0.15 : billValue * 0.2;
};

const bills = [125, 555, 44];
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(total);
*/

/* // 03 CHALLENGE #3

const mark = {
  fullName: 'Mark Miller',
  mess: 78,
  height: 1.69,
  calcBMI: function() {
    this.BMI =this.mess / this.height ** 2
    return this.BMI;
  }
}
const john = {
  fullName: 'John Smith',
  mess: 92,
  height: 1.95,
  calcBMI: function() {
    this.BMI =this.mess / this.height ** 2
    return this.BMI;
  }
}

if(mark.calcBMI() > john.calcBMI()) {
  console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`);
}else if(mark.BMI > john.BMI){
  console.log(`${mark.fullName}'s BMI (${mark.BMI}) is less than ${john.fullName}'s (${john.BMI})!`);
} else {
  console.log(`${mark.fullName}'s BMI (${mark.BMI}) and ${john.fullName}'s (${john.BMI}) is equal!`);
}
*/

/* // 03 CHALLENGE #4

const calcTip = function (billValue) {
  // const tipPercent = billValue > 50 && billValue < 300 ? .15 : .2;
  // return billValue * tipPercent;

  return billValue > 50 && billValue < 300 ? billValue * 0.15 : billValue * 0.2;
};

const calcAverage = function(arr) {
  let sum = 0;

  for(let i = 0; i <arr.length ; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(calcAverage(bills));
console.log(tips);
console.log(calcAverage(tips));
console.log(totals);
console.log(calcAverage(totals));
*/

/* // 04 CHALLENGE #1

//UNDRESTANDING THE PROBLEM:  یه تابع میخوایم که آرایه بگیره و استرینگ دما ها رو چاپ کنه

// SUB-PROBLEM
// تولید کردن رشته برای هر دما
// به هم چسبوندن رشته ها
//چاپ کردن رشته نهایی
// `... ${arr[i]}ºC in ${i + 1} days`

const printForecasted = function (arr) {

  let temps = '';

  for (let i = 0; i < arr.length; i++) {
    
    temps = temps.concat(`... ${arr[i]}ºC in ${i + 1} days `);
  }
  console.log(temps +'...');
};

printForecasted([17, 21, 23]);
printForecasted([12, 5, -5, 0, 4]);
*/

/* // 09 CHALLENGE #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;

// 2.
const [gk, ...fieldPlayers] = players1;

// 3.
const allPlayers = [...players1, ...players2];

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(
    ...players,
    `goled there ball, ${players.length} goals in total.`
  );
};

printGoals('Davies', 'Kimmich', 'Muller', 'Lewandowski');
printGoals(...game.scored);

// 7.
let likelyToWin = (team1 < team2 && 'team1') || (team1 > team2 && 'team2');

console.log(likelyToWin);
*/

/* // 09 CHALLENGE #2

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [goalNumber, player] of game.scored.entries()) {
  console.log(`Goal ${goalNumber + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let averageOdds = 0;
for (const odd of odds) {
  averageOdds += odd;
}
averageOdds /= odds.length;

console.log(averageOdds);

// 3.
for (const [name, oddValue] of Object.entries(game.odds)) {
  const teamName = name === 'x' ? 'draw' : `victory ${game[name]}`;
  console.log(`Odd of ${teamName}: ${oddValue}`);
}

// 4.
const scorers = {};
for (const playerName of game.scored) {
  // scorers[playerName] ? scorers[playerName]++ : (scorers[playerName] = 1);
  scorers[playerName] = scorers[playerName] + 1 || 1;
}

console.log(scorers);
*/

/* // 09 CHALLENGE #3

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
// const events = new Set(gameEvents.values());
// const eventsArray = [...events];
// console.log(eventsArray);
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4.
// for (const [minut, event] of gameEvents) {
//   const half = minut > 45 ? '[SECOND HALF]' : '[FIRST HALF]';
//   console.log(`${half} ${minut}: ${event}`);
// }
*/

/* // 09 CHALLENGE #4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  convertToCamelCase(text);
});

const convertToCamelCase = function (str) {
  const textArray = str.split('\n');

  for (const [index, text] of textArray.entries()) {
    const [first, second] = text.toLowerCase().trim().split('_');

    const curectSecond = second.replace(second[0], second[0].toUpperCase());

    console.log(
      [first, curectSecond].join('').padEnd(20, ' ') + '✅'.repeat(index + 1)
    );
  }
};

convertToCamelCase(`underscore_case
  first_name
Some_Variable
   calculate_AGE
delayed_departure`);
*/

/* // 09 CHALLENGE #5

const getCode = str => str.slice(0, 3).toUpperCase();

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(36);

  console.log(output);
}
*/

/* // 10 CHALLENGE #1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  // 1.
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}` +
          '\n(Write option number)'
      )
    );

    // if (typeof answer === 'number' &&answer < this.answers.length) {
    //   this.answers[answer]++;
    // }

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // 4.
    this.displayResults();
    this.displayResults('string');
  },

  // 2.
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// 2.
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// 5.

// const Data1 = { answers: [5, 2, 3] };
// const Data2 = { answers: [1, 5, 3, 9, 6, 1] };

// poll.displayResults.call(Data1);
// poll.displayResults.call(Data2);
// poll.displayResults.call(Data1, 'string');
// poll.displayResults.call(Data2, 'string');

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
*/

/* // 10 CHALLENGE #2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/

/* // 11 CHALLENGE #1

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrect = dogsJulia.slice();
  dogsJuliaCorrect.splice(0, 1);
  dogsJuliaCorrect.splice(-2);

  const dogs = dogsJuliaCorrect.concat(dogsKate);

  dogs.forEach(function (dogAge, i) {
    if (dogAge >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy🐶`);
    }
  });
};

const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

checkDogs(julia, kate);

console.log('-'.repeat(6) + ' Test Data 2 ' + '-'.repeat(6));
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

/* // 11 CHALLENGE #2

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  // const avg = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  const avg = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  // 2 3, (2 + 3)/2 === 2/2 + 2/3

  console.log(humanAges);
  console.log(adults);
  return avg;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

/* // 11 CHALLENGE #3

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

/* // 11 PRACTICE

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// 1.
const banckDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, mov) => sum + mov, 0);

console.log(banckDepositSum);

// 2.
//// how meny deposits with at least 1000

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, mov) => (mov >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// 3.
//// creat an object which contains the sum of deposits and withdrawals

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// 4.
//// Creat a function to convert any string to a title case
//// this is a nise title -> This Is a Nise Title
const convertTitleCase = function (str) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const expections = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = str
    .toLowerCase()
    .split(' ')
    .map(word => (expections.includes(word) ? word : capitalize(word)))
    .join(' ');

  // Capitalize in down line make the firs letter in sentence capital
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/

/* // 11 CHALLENGE #4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);

console.log(dogs);

// 2.
const checkEat = function (dog) {
  const eatGood =
    dog.curFood <= dog.recommendedFood * 1.1 &&
    dog.curFood >= dog.recommendedFood * 0.9;

  const eatTooMuch = dog.curFood >= dog.recommendedFood * 1.1;

  const eatingState = eatGood ? 0 : eatTooMuch ? 1 : -1;

  // good -> 0
  // too much -> 1
  // litle -> -1

  return eatingState;
};

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(checkEat(dogSarah));

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => checkEat(dog) === 1)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => checkEat(dog) === -1)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
console.log(dogs.map(dog => checkEat(dog)).some(eat => eat === 0));

// 7.
console.log(dogs.filter(dog => checkEat(dog) === 0));

// 8.
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
*/

/* // 14 CHALLENGE #1

const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

car.prototype.accelerate = function () {
  // this.speed += 10;
  console.log((this.speed += 10));
};

car.prototype.brake = function () {
  console.log((this.speed -= 5));
};

const bmw = new car('BMW', 120);
const mercedes = new car('Mercedes', 95);

bmw.accelerate();
mercedes.accelerate();
bmw.brake();
mercedes.brake();
*/

/* // 14 CHALLENGE #2

class carCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  acelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speedUs) {
    this.speed = speedUs * 1.6;
  }
}

const ford = new carCl('Ford', 120);

console.log(ford.speedUS);
ford.acelerate();
ford.acelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
*/

/* // 14 CHALLENGE #3

const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

car.prototype.accelerate = function () {
  // this.speed += 10;
  console.log((this.speed += 10));
};

car.prototype.brake = function () {
  console.log((this.speed -= 5));
};

const EV = function (make, speed, charge) {
  car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototype of EV to Car.prototype
EV.prototype = Object.create(car.prototype);

// EV methods
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%'`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.brake();
tesla.accelerate();
tesla.accelerate();
tesla.chargeBattery(90);
tesla.accelerate();

console.log(tesla);
*/

/*// 14 CHALLENGE #4

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);

    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);

    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;

    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );

    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian);
console.log(rivian.speedUS);
*/
