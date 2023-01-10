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
