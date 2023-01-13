'use strict';

// --------------------
// Functions accepting callback functions
// --------------------

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const uppperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  // functions have a built-in methods and properties
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', uppperFirstWord);
transformer('Andrzej Sapkowski napisał wiedźmina!', oneWord);

// --------------------
// Functions returning functions
// --------------------

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// // the value below is essentialy a function
// const greeterHey = greet('Hey');
// // this means that we can call it like a regular function now, eg.
// greeterHey('Jonas');
// greeterHey('Andrzej');

// // we can also call it in one go
// greet('Hello')('Andrzej');

// // making the same function as arrow
// const greetArrow = greeting => {
//   return name => console.log(`${greeting} ${name}`);
// };

// greetArrow('Fuck You!')('Arnold');

// --------------------
// The call and apply methods
// --------------------

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
// does NOT work
// book(23, 'Sarah Williams');
// call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');
// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);

// --------------------
// The bind method
// --------------------
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Andrzej Sapkowski');
bookEW23('J.R.R. Tolkien');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// the value below is essentialy a function
const greeterHey = greet('Hey');
// this means that we can call it like a regular function now, eg.
greeterHey('Jonas');
greeterHey('Andrzej');

// we can also call it in one go
greet('Hello')('Andrzej');

// making the same function as arrow
const greetArrow = greeting => {
  return name => console.log(`${greeting} ${name}`);
};

greetArrow('Fuck You!')('Arnold');

// const fcfAddTax = rate => {
//   return {
//     fcfAddVAT: value => value + value fcfAddTax
//   }
// };

const fcfAddTax = rate => {
  return value => value + value * rate;
};
const fcfAddVAT = fcfAddTax(0.23);

console.log(fcfAddVAT(1000));

console.log(fcfAddTax(0.23)(10));
