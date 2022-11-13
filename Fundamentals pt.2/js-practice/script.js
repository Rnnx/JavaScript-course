// function declaration
function calcAge(birthYear) {
    return new Date().getFullYear() - birthYear
}

// function expression
const calcAge2 = function(birthYear) {
    return new Date().getFullYear() - birthYear
}

// arrow function
const calcAge3 = birthYear => new Date().getFullYear() - birthYear

const yearsUntilRetirement = birthYear => {
    const age = calcAge(birthYear)
    const retirement = 65 - age
    return retirement
}

// arrow function with more arguments
const randomFunction = (birthYear, firstName) => {
    const age = calcAge2(birthYear)
    const retirement = 65 - age
    return `The name of the programmer is ${firstName}, He is ${age} years old, and He'll retire in ${retirement} years.`
}

// function calling other function
function cutPieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples)
    const orangePieces = cutPieces(oranges)

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
    return juice
}
