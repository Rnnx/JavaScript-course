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
// Does NOT work
// book(23, 'Sarah Williams');
// Call method
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
