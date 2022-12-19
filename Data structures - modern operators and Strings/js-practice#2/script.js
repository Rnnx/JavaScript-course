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
