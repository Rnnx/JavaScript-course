// functions
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

// arrays
const friends = ['Michael', 'Steven', 'Peter']
const years = new Array(1991, 1998, 2008, 2020)

// array add elements
// push
friends.push('Jay')
// unshift
friends.unshift('John')

// array delete elements
// pop
friends.pop()
// shift
friends.shift()

// find the element in the array
// indexOf
friends.indexOf('Steven')
// includes
friends.includes('Michael')

// objects
// object literal
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2022 - 1991,
    friends: ['Michael', 'Peter', 'Steven']
}

// retrieve data from the object
// dot notation
const jonasFirstName = jonas.firstName
// bracket notation
const jonasLastName = jonas['lastName']
// bracket notation with computed property name (not possible with dot notation)
const nameKey = 'Name'
console.log(jonas[`first${nameKey}`])
console.log(jonas[`last${nameKey}`])

// const interestedIn = prompt(`What do You want to know about Jonas?
// Choose between: firstName, lastName, age, job and friends`)

// jonas[interestedIn] ? 
// console.log(jonas[interestedIn]) : console.log("The object doesn't have the property You specified, please check Your spelling.")

// add property to the object
jonas.location = 'Portugal'
jonas['twitter'] = '@jonasschmedtman'
console.log(jonas)

// challenge
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas['friends'][0]}`)

// object methods
const andrzej = {
    firstName: 'Andrzej',
    lastName: 'Sapkowski',
    birthYear: 1948,
    friends: ['Geralt', 'Jaskier', 'Zoltan'],
    hasDriverLicense: true,

    calcAge: birthYear => new Date().getFullYear() - birthYear
}
console.log(andrzej.calcAge(andrzej['birthYear']))
console.log(andrzej['calcAge'](andrzej.birthYear))

// using 'this' keyword
const jarek = {
    firstName: 'Jarosław',
    lastName: 'Kaczyński',
    birthYear: 1949,
    friends: ['Ziobro', 'Duda', 'Donald'],
    hasDriverLicense: true,

    // calcAge: function() {
    //     console.log(this)
    //     return new Date().getFullYear() - this.birthYear
    // }
    
    calcAge: function() {
        // function adding new property to the object
        this.age = new Date().getFullYear() - this.birthYear
    },
    // challenge
    printInfo: function() {
        console.log(`${this.firstName}, is a ${this.age}-year old teacher, and He has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`)
    }
}
// calling a function to add new property and printing it to the console
jarek.calcAge()
console.log(jarek['age'])

jarek.printInfo()

// iterations
// regular for loop
const exampleArray = []
for (let i = 0; i < 10; i++) {
    exampleArray.push(i)
}
console.log(exampleArray)

// looping backwards
for (let i = friends.length - 1; i >= 0; i--){
    console.log(friends[i])
}

// loop in loop
for (let i = friends.length - 1; i >= 0; i--){
    for (let j = 0; j < friends.length; j++){
        console.log(`${friends[i]} has a friend called ${friends[j]}`)
    }
}

// basic while loops
let rep = 1
while (rep < 10) {
   rep++ 
}
console.log(rep)

let dice = 0
while(dice !== 6) {
    dice = Math.trunc(Math.random() * 6) + 1
    dice === 6 ? console.log(`You rolled a ${dice}, Loop is about to end...`) : console.log(`You rolled a ${dice}`)
}