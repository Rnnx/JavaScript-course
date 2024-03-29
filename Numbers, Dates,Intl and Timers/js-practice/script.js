'use strict';
// --------------------
// Bankist App
// --------------------

// Data
// DIFFERENT DATA! Contains movement dates, currency and locale
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// --------------------
// Elements
// --------------------
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
// Functions
// --------------------
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// --------------------
// Event handlers
// --------------------
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// --------------------
// Lectures
// --------------------

// --------------------
// Conversion from string to number

// using global function call 'Number'
console.log(Number('23'));

// using '+' sign as JS will automatically convert (coerse) it thinking it should be a number
console.log(+'23');

// parsing
console.log(Number.parseInt('30px')); // NOTE: It'll even try to convert the string with chars inside, but only if the beginning of string is a number

// parsing takes 2 parameters, the second one is the base for numeric system
console.log(Number('444', 10));
console.log(Number.parseFloat('2.5'));

// isNaN()
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('x20')); // false
console.log(Number.isNaN(+'20px')); // true
console.log(Number.isNaN(23 / 0)); // false - even tho it should be infinity

// because of 'Number.isNaN(23 / 0)' resulting in false there is another function
// isFinite() - which will result in the opposite of the isNaN()
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(23 / 0)); // false but we

// --------------------
// Math and rounding

// square root and cubic root
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

// max / min
console.log(Math.max(5, 18, 23, 12, 2));
console.log(Math.max(5, 18, '23', 12, 2)); // makes a coersion
console.log(Math.max(5, 18, '23px', 12, 2)); // but does not make a parsing!

console.log(Math.min(5, 18, '23', 12, 2));

// constans
console.log(Math.PI);

// random
console.log(Math.random() * 6); // in range of <0, 1>
console.log(Math.trunc(Math.random() * 6)); // in range of <0, 5>

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min; // function for calculating a random number in given range
// 0...1 -> 0...(max - min) -> min...max
console.log(randomInt(10, 12));

// rounding integers (all these methods do type coersion)
console.log(Math.trunc(23.3)); // Math.trunc()
console.log(Math.round(23.3)); // Math.round()
console.log(Math.ceil(23.3)); // Math.ceil() - the best one since it covers the negative numbers
console.log(Math.floor(23.3)); // Math.floor() - the best one since it covers the negative numbers

// rounding decimals
console.log((2.7).toFixed(0)); // it returns a String! Solution to that below:
console.log(+(2.7097532).toFixed(5)); // the one and loved '+' sign

// --------------------
// Remainder operator

console.log(5 % 2);

const isEven = number => number % 2 === 0;
console.log(isEven(2));

// --------------------
// Numeric separators

const diamater = 287_460_000_000;
console.log(diamater);

const priceCents = 345_99;
console.log(priceCents);

// --------------------
// BidInt
console.log(2 ** 53 - 1); // the biggest base 64 int value over base 2 numeric system
console.log(Number.MAX_SAFE_INTEGER);

console.log(23234645745675763452352352524574457n); // BIG INT
console.log(BigInt(23234645745675763452352352524574457));

// operations (work mostly the same as normal)
console.log(10000n + 10000n);
console.log(21479102470192748901624071249017240n * 10000000n);

// exception (can't mix BigInt with regular types)
const huge = 14122351534234562162346234523412n;
const normal = 23;
// console.log(huge * normal); // resulting in error!

// exception (division)
console.log(10n / 3n); // = 3n // cuts off the decimal part!
console.log(10 / 3); // = 3.3333333...

// also generic functions like the whole Math. lib won't work on BigInts
// console.log(Math.sqrt(huge, 2)); // resulting in error!

// the exception to above is some logic operators and string concatenations
console.log(20n > 15);
console.log(20n < 15);
console.log(huge + ' is a really huge number!');

// --------------------
// Dates

// creating a date
// creating an object
const now = new Date();
console.log(now);

// from date string
console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2023'));
console.log(new Date(account1.movementsDates[0]));

// from another objects like year, month, day etc.
console.log(new Date(2037, 10, 19, 15, 21, 5));
console.log(new Date(2037, 10, 19));

// passing time that went from the beginning of Unix Time (in ms)
console.log(new Date(0));
// example: 3 days after the above
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //no. of days times hours, min, sec, and ms

console.log(`****************************************`);

// working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // get year from date
console.log(future.getYear()); // this is some shit lol
console.log(future.getMonth()); // get month from date (0 based)
console.log(future.getDate()); // get day from the date (1 based)
console.log(future.getDay()); // get day of the week from the date (0 based)
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString()); // get date as string that conforms to the ISO standard

const futureTimeStamp = future.getTime();
console.log(futureTimeStamp); // get timestamp from date
// when we pass a timestamp to a new Date constructor we will get the exact same date that would generate given timestamp
console.log(new Date(futureTimeStamp));

console.log(Date.now()); // current timestamp (the moment it was instantiated)

// dates can also be change using set methods
future.setFullYear(2140);
console.log(future);

// operations with dates (example)
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const example1 = calcDaysPassed(future, Date.now());
console.log(example1);

// internationalizing Dates (Intl)
const nowEU = new Intl.DateTimeFormat('en-GB').format(now);
console.log(nowEU);
const nowUS = new Intl.DateTimeFormat('en-US').format(now);
console.log(nowUS);
const nowSY = new Intl.DateTimeFormat('ar-SY').format(now);
console.log(nowSY);

const optionsDates = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};

const nowWithOptionsEU = new Intl.DateTimeFormat('en-GB', optionsDates).format(
  now
);
console.log(nowWithOptionsEU);

// taking localization from the browser
const locale = navigator.language;
const nowWithOptionsLocale = new Intl.DateTimeFormat(
  locale,
  optionsDates
).format(now);
console.log(nowWithOptionsLocale);

// --------------------
// Internationalizing numbers
const num = 3158721.23;

const numEU = new Intl.NumberFormat('de-DE').format(num);
console.log(numEU);
const numUS = new Intl.NumberFormat('en-US').format(num);
console.log(numUS);
const numSY = new Intl.NumberFormat('ar-SY').format(num);
console.log(numSY);
const numLocale = new Intl.NumberFormat(locale).format(num);
console.log(numLocale);

const optionsNum = {
  style: 'unit',
  unit: 'mile-per-hour',
};
const numWithOptionsLocale = new Intl.NumberFormat('en-US', optionsNum).format(
  num
);
console.log(numWithOptionsLocale);

// --------------------
// Timers: setTimeout(), and setInterval()

// setTimeout()
setTimeout(() => console.log(`Here is Your pizza! 🍕`), 3000); // delaying console log by 3s
console.log(`Waiting...`);

// above with arguments
setTimeout(
  (ing1, ing2) =>
    console.log(`Here is Your pizza with ${ing1}, and ${ing2}! 🍕`),
  3000,
  'olives',
  'spinach'
);

// cancelling the timeout before the specified delay passed
const ingredients = ['salami', 'double cheese'];

const myTimer = setTimeout(
  (ing1, ing2) =>
    console.log(`Here is Your pizza with ${ing1}, and ${ing2}! 🍕`),
  3000,
  ...ingredients
);
if (ingredients.includes('salami')) clearTimeout(myTimer);

// setInterval()
// setInterval(() => console.log(new Date()), 1000);
