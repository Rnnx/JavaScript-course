'use strict';

// Test data
const juliasDogs1 = [3, 5, 2, 12, 7];
const katesDogs1 = [4, 1, 15, 8, 3];
const juliasDogs2 = [9, 16, 6, 8, 3];
const katesDogs2 = [10, 5, 6, 1, 4];

const checkDogs = function (juliasDogs, katesDogs) {
  const sharedCats = [
    ...juliasDogs.slice(1, juliasDogs.length - 2),
    ...katesDogs,
  ];

  let str = ``;

  sharedCats.forEach((catAge, key) => {
    str += `Dog number ${key + 1} is ${
      Number(catAge) >= 3 ? 'an adult' : 'still a puppy'
    }, and is ${catAge} years old.
`;
  });

  return console.log(str);
};

checkDogs(juliasDogs1, katesDogs1);
checkDogs(juliasDogs2, katesDogs2);
