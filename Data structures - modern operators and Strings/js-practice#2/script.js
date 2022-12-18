'use strict';

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
//                THE SAME SAME ARRAY THAT WE DECLARED USING SET METHOD.
// rest.set([1, 2], 'Test')
// console.log(rest)
// console.log(rest.get([1, 2]))

// SOLUTION TO ABOVE
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));
