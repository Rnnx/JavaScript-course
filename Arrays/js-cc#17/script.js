'use strict';

// Test data
const sharedDogs1 = [5, 2, 4, 1, 15, 8, 3];
const sharedDogs2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (dogsAgeArray) {
  const agesInHumanYears = dogsAgeArray
    .map(age => (age < 3 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce(
      (acc, curr, i, arr) =>
        i < arr.length - 1 ? acc + curr : (acc + curr) / arr.length,
      0
    );

  return console.log(agesInHumanYears);
};

calcAverageHumanAge(sharedDogs1);
calcAverageHumanAge(sharedDogs2);
