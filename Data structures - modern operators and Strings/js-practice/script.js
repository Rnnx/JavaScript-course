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
// the order of the passed object doesn't have to match the order of declaration inside the restaurant object!
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// --------------------
// DESTRUCTURING OBJECTS
// --------------------

const { name, openingHours, categories } = restaurant;
console.log(`name: ${name}
openingHours: ${openingHours}
categories: ${categories}`);

// if we want to change names of the created variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(`restaurantName: ${restaurantName}
hours: ${hours}
tags: ${tags}`);

// if we want to make default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(`menu: ${menu}
starters: ${starters}`);

// mutating variables
let varA = 111;
let varB = 999;
const testObject = {
  varA: 23,
  varB: 7,
  varC: 14,
};

// {varA, varB} = testObject - will result with error Unexpected token because when we start a line with a curly bracers JS expects from us a code block!
({ varA, varB } = testObject); // this will work
console.log(`varA: ${varA}
varB: ${varB}`);

// nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(`open: ${open}
close: ${close}`);

// --------------------
// DESTRUCTURING ARRAYS
// --------------------

// old school
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// modern destructuring
const [x, y, z] = arr;
console.log(`x: ${x}
y: ${y}
z: ${z}`);

// With modern destructuring we don't have to destructure all the data from the array. Selected items will follow the order of the items in the array. In other words, declaring mordern destructor with 2 variables will take 2 first elements from the array.
let [first, second] = restaurant.categories;
console.log(first, second);

// if we need to retrieve data stored under certain indexes, we can simply leave blank spaces in the destructor declaration consistent with the source array indexing
const [one, , three, four] = restaurant.starterMenu;
console.log(`one: ${one}
three: ${three}
four: ${four}`);

// switching variables
// old school
const temp = first;
first = second;
second = temp;
console.log(first, second);

// destructuring
[first, second] = [second, first];
console.log(first, second);

// more practice (with objects)
// receive 2 return values from a function
const [starter, main] = restaurant.order(2, 0);
console.log(`starter: ${starter}
main: ${main}`);

const nested = [2, 4, [5, 6]];
const [var1, var2, arr1] = nested;
console.log(`var1: ${var1}
var2: ${var2}
arr1: ${arr1}`);

// if we don't know the exact number of elements in the array we can destruct it with default values so that whenever we 'hit' the undefined value we will assign the default to the destructor element
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(`p: ${p}
q: ${q}
r: ${r}`);

// --------------------
// THE SPREAD OPERATOR
// --------------------

// old school - adding new elements to the array
const myArr = [7, 8, 9];
const badNewArr = [1, 2, myArr[0], myArr[1], myArr[2]];
console.log(badNewArr);

// the spread operator - the only way! :D
const goodNewArr = [1, 2, ...myArr];
console.log(goodNewArr);

// if we want to print individual values from the array
// old school
console.log(
  `${badNewArr[0]} ${badNewArr[1]} ${badNewArr[2]} ${badNewArr[3]} ${badNewArr[4]}`
);

// the spread operator
console.log(...goodNewArr);

const newMenu = ['Burger', ...restaurant.mainMenu];
console.log(newMenu);

// spread operator for creating a shallow copy of the array (object)
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// spread operator for joining 2 arrays
const joinedMenus = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(joinedMenus);

// spread operator on String
const str = 'Karol';
const strPlus = [...str, ...'is a hero!'];
console.log(strPlus);

const ingredients = [
  // prompt(`Let's make pasta! Ingredient 1?`),
  // prompt(`Ingredient 2?`),
  // prompt(`Ingredient 3?`)
];
console.log(ingredients);

// old school - calling a method with array elements as parameters
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// the spread operator
restaurant.orderPasta(...ingredients);

// objects - since ES6
const newRestaurant = { fountedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// objects - shallow copy
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(`Restaurant name: ${restaurant.name}
Copy Restaurant name: ${restaurantCopy.name}`);

// --------------------
// REST PATTERN AND PARAMETERS
// --------------------

// SPREAD, because on RIGHT side of '='
const newArr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of '+'
const [k, l, ...others] = [1, 2, 3, 4, 5];
console.log(`k: ${k}
l: ${l}
others: ${others}`);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// functions
const add = function (...numbers) {
  let sum = 0;
  numbers.forEach(e => {
    sum += e;
  });
  console.log(sum);
};
add(2, 3);
add(4, 5, 6, 7);
add(1, 2, 3, 4, 5, 6, 7, 8, 9);

// if We want to pass an array to a function with rest parameters,
// We have to use the spread operator :)
const d = [23, 5, 7];
add(...d);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// --------------------
// SHORT CIRCUITING
// --------------------

console.log(null || undefined); // the last value will be returned

console.log('Hello' && 23 && null && 'Geralt'); // null will be returned

// practical example
if (restaurant.orderPizza) {
  restaurant.orderPasta('mushrooms', 'spinach');
}
// above example can be changed to using the short circuiting
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// because first

// THE NULLISH COALLESCING OPERATOR
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// --------------------
// LOGICAL ASSIGNMENT OPERATORS
// --------------------

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'Capri',
  owner: 'Giovanni Rossi',
};

// logical assignment 'or'
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// logical assignment 'nullish'
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// logical assignment 'and'
rest1.owner &&= '<anonymous>';
rest2.owner &&= '<anonymous>';

console.log(rest1);
console.log(rest2);

// --------------------
// OPTIONAL CHAINING
// --------------------

// old way of dealing with chains of properties that we don't if they exist
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// optional chaining ES6
console.log(restaurant.openingHours.mon?.open);

// real world example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const openHours = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, We open at ${openHours}.`);
}

// methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist.');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist.');

// arrays
const users = [
  {
    name: 'Karol',
    email: 'mail@mail.com',
  },
];
console.log(users[0]?.name ?? 'User array empty');
console.log(users[1]?.name ?? 'User array empty');

// --------------------
// LOOPING
// --------------------

// looping with object keys
const properties = Object.keys(openingHours);
console.log(properties);

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

// property values
const values = Object.values(openingHours);
console.log(values);

// entrie object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} We open at ${open} and close at ${close}.`);
}
