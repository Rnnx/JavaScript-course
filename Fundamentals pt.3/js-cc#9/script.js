'use strict'

const forecastedTemperatures = [12, 5, -5, 0, 4]

const printForecast = (arr) => {
    let result = '...'
    if (arr.every((type => typeof(type) === "number"))) {
        for (const temp of arr) {
            result += ` ${temp}° in ${arr.indexOf(temp) + 1} days ...`
        }
    } else {
        return -1
    }
    return console.log(result)
}

printForecast(forecastedTemperatures)