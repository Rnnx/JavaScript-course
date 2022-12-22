'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 13,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // Real life application of destructuring. When we don't know the order of parameters inside given object! **NOTE! parameters = xx are default values!
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '22:30',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is Your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const { name, openingHours, categories } = restaurant;
console.log(`name: ${name}
openingHours: ${openingHours}
categories: ${categories}`);

// --------------------
// SETS
// --------------------

// define a set
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
// get set's size
console.log(ordersSet.size);
// check if set contain a certain value
console.log(ordersSet.has('Pizza'));
// add to set
ordersSet.add('Garlic Bread');
console.log(ordersSet);
// delete from set
ordersSet.delete('Pizza');
console.log(ordersSet);
// clear the whole set
ordersSet.clear();
console.log(ordersSet);

// --------------------
// MAPS
// --------------------

// define a map
const rest = new Map();
// add key-value pair to the map
rest.set('name', 'Classico Italiano');
console.log(rest);
// chain 'set'
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');
console.log(rest);
// get method
console.log(rest.get('name'));
console.log(rest.get(true));

// example usage of boolean values as keys
const time = new Date().getHours();
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// contain
console.log(rest.has('categories'));
// size
console.log(rest.size);

// array as key - BELOW EXAMPLE WILL PRODUCE ERROR BECAUSE TWO ARRAYS ARE DIFFERENT OBJECTS
//                STORED IN HEAP, THEREFORE THE ARRAY WE TRY TO PASS INSIDE GET METHOD IS NOT
//                THE SAME SAME ARRAY THAT WE DECLARED USING SET METHOD. YES IT DOES.
// rest.set([1, 2], 'Test')
// console.log(rest)
// console.log(rest.get([1, 2]))

// SOLUTION TO ABOVE
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

// populating the map
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'Correct 🏆'],
  [false, 'Try again'],
]);
console.log('karol');
console.log(question);

// converting objects to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// quizz app
console.log(question.get('question'));
// looping through map
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(question.get(answer === question.get('correct')));

// converting map to array
const mapToArray = [...question];
console.log(mapToArray);

// --------------------
// STRINGS
// --------------------
const airline = 'TAP Air Portugal';
const plane = 'A320';

// index of (if -1 is returned then the argument passed to function didn't exist in string)
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

// slice
console.log(airline.slice(4));
console.log(airline.slice(4, 7)); // never reaches the index specified in second argument

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')));

console.log(airline.slice(-2)); // starts 2 indexes before last char
console.log(airline.slice(1, -1)); // starts at second char and cuts the last one

// to lower/upper case
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// compare 2 emails
const email = 'karol@gmail.com';
const loginEmail = '    karoL@GMAil.cOm \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

email === trimmedEmail
  ? console.log('Both are the same')
  : console.log('One is fucked');

// replace
const priceGB = '288,97&';
const priceUS = priceGB.replace('&', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23, Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// replace with regex
console.log(announcement.replace(/door/g, 'gate'));

// booleans (indludes, startsWith, endsWith)
const myPlane = 'A320neo';
console.log(myPlane.includes('A320'));
console.log(myPlane.startsWith('A320'));
console.log(myPlane.endsWith('eo'));

// split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
