'use strict'

// PROBLEM
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

// 1. Understanding the problem
// a) What is temperature amplitude?
    // Answer: Temperature amplitude is a climatic factor, used to measure the difference between the highest and the lowest temperature.
// b) How to calculate a temperature amplitude?
    // Answer: A = Tmax - Tmin
// c) How do I handle the 'error' values?
    // Answer: We choose to delete all 'error' values from the array.
// d) What if the given array is empty or contains only 'error' values?
    // Answer: In that case we can return array back or inform about incorrect data.

// 2. Breaking up into sub-problems
// a) Check if the array contains correct (useful) data.
// b) Handle all 'error' values.
// b) Get the min value from the array.
// c) Get the max value from the array.
// d) Calculate temperature amplitude and return it.

// 3. Pseudocode
// function calculateAmplitude(array)
// find all 'error' values and delete them
// if array is empty 
    // return array or inform about incorrect data
// else
    // get min value of the array
    // get max value of the array
    // calculate the amplitude
    // return calculated value

const calculateTemperatureAmplitude = (array) => {
    const noErrorArray = array.filter((error) => error !== 'error')
    if (noErrorArray.length === 0) {
        return array
    } else {
        const minValue = Math.min(...noErrorArray)
        const maxValue = Math.max(...noErrorArray)
        return maxValue - minValue
    }
}

console.log(calculateTemperatureAmplitude(temperatures))