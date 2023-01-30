'use strict';
// --------------------
// Bankist App
// --------------------

// Data
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

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// --------------------
// Lectures
// --------------------

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// slice
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
// getting a shallow copy of an array with slice
console.log(arr.slice());

console.log('----------');
// splice (changes (mutates) the original array)
console.log(arr.splice(-1)); // deletes the last element of the array
console.log(arr);

console.log('----------');
// reverse (mutates the original array)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr);
console.log(arr2);
console.log(arr2.reverse());

console.log('----------');
// concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // the same result as above

console.log('----------');
// join
console.log(letters.join(' - '));

console.log('----------');
// new 'at' method (also works with strings)
const dArr = [23, 11, 64];
console.log(dArr[0]); // the old way getting a first element of the array
console.log(dArr.at(0)); // 'at' method

// the usefulness of the 'at' method is getting the last element of the array
console.log(dArr[dArr.length - 1]); // the old way
console.log(dArr.at(-1));

// --------------------
// Fore each
// --------------------
const exampleMovements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// note! forEach() doesn't have the 'break' or 'continue' methods. It'll alway loop through the whole array
exampleMovements.forEach(function (mov, i, arr) {
  // names or parameters don't matter, but the order does!
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// getting a counter from forEach()
exampleMovements.forEach(function (movement) {});

// forEach() with maps
const exampleCurrencies = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound Sterling'],
]);

exampleCurrencies.forEach(function (currentValue, key, map) {
  console.log(`${key}: ${currentValue}`);
});

// forEach() with sets
const uniqueCurrencies = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(uniqueCurrencies);

// current value in sets is the same as key!
uniqueCurrencies.forEach(function (currentValue, key, set) {
  console.log(`${key}: ${currentValue}`);
});

// --------------------
// The Map method
// --------------------
const eurToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);
const movementsUSDfor = [];

for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

// --------------------
// The Filter method
// --------------------
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// --------------------
// The Reduce method
// --------------------
console.log(movements);
// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);
// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
