"use strict"

// --------------------
// SCOPING
// --------------------

function calcAge(birthYear) {
    const age = new Date().getFullYear() - birthYear
    
    function printAge() {
        let output = `${firstName}, You are ${age}, born in ${birthYear}.`
        console.log(output)

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true

            const firstName = "Steven" // because of the scope chain JS uses the variable placed in the most inner scope possible. Therefore the output of the string will get 'Steven' as firstName

            const str = `Oh, and You're a millenial, ${firstName}.`
            console.log(str)

            function add(a, b) {
                return a + b
            }

            // redefined variable will take the last assigned value, therefore the new output will be displayed
            output = `New Output!`
            console.log(output)
        }
        

        // console.log(str) - unaccessible because const variables are block scoped, therefore the 'str' cannot be accessed from here

        console.log(millenial) // since var variables are not block scoped, the 'millenial' can be accessed from here

        // add(3, 4) - using strict mode makes all the functions block scoped, therefore 'add' function cannot be accessed from here
    }
    printAge()

    return age
}

const firstName = "Karol"
calcAge(1994)

// printAge() - in this scope the function is unaccessible (Reference Error)

// --------------------
// HOISTING AND TDZ
// --------------------

// VARIABLES
// console.log(me) - var's are not hoisted, therefore we get a Reference Error

// let's and const's are hoisted but we get another error (can't access lexical declaration before initialization) !- TDZ -!
// console.log(job)
// console.log(year)

var me = "Karol"
let job = "teacher"
const year = 1994

// FUNCTIONS
// working fine
console.log(addDecl(2, 3))
// console.log(addExpr(2, 3)) - can't access lexical declaration before initialization !- TDZ -!
// console.log(addArrow(2, 3)) - can't access lexical declaration before initialization !- TDZ -!

function addDecl(a, b) {
    return a + b
}
const addExpr = function(a, b) {
    return a + b
}
const addArrow = (a, b) => a + b

// Example - because of hoisting We meet the requirement for deleting all products from shopping cart
if (!numProducts) deleteShoppingCart()

var numProducts = 10

function deleteShoppingCart() {
    console.log("All products deleted!")
}

// --------------------
// THIS
// --------------------
console.log(this)

const calcDeath = function(birthYear) {
    console.log(birthYear + 100)
    console.log(this) // using 'strict mode' makes this keyword undefined in this scope
}
calcDeath(1994)

const calcDeathArrow = (birthYear) => {
    console.log(birthYear + 100)
    return console.log(this) // this in arrow functions refers to surrounding function. It's called lexical this, and in this example it refers to window
}
calcDeathArrow(1991)

const jonas = {
    year: 1980,
    calcAge: function() {
        console.log(this) // this of the method points to the object that called it. In this example the jonas object will be displayed
    }
}
jonas.calcAge()

const matilda = {
    year: 2017,
}
matilda.calcAge = jonas.calcAge // method borrowing
matilda.calcAge() // it doesn't matter where the function is declared. In this example calcAge() declaration resides inside the jonas object but the object calling it is matilda, therefore this keyword points to matilda object

const f = jonas.calcAge
// f() - because here we deal with so called simple function call, this keyword is undefined. Trying to console.log(this) will resolve in getting an error

// --------------------
// THIS IN REGULAR VS ARROW FUNCTIONS
// --------------------
jonas.firstName = 'Jonas'
jonas.greet = () => console.log(`Hey ${this.firstName}`)
jonas.greet() // once again, because we used this keyword inside an arrow function It is pointing to the surrounding function which in this case refers to window

const addTwo = function(a, b) {
    console.log(arguments)
}
addTwo(3, 5) // regular functions have access to arguments

// --------------------
// PRIMITIVE VS. REFERENCE TYPES
// --------------------
let age = 30
let oldAge = age
age = 31
console.log(age)
console.log(oldAge)

// because of reference they values change for both objects
const mySelf = {
    name: 'Karol',
    age: 28
}
const friend = mySelf
friend.age = 19
console.log(`Friend: ${friend.age}`)
console.log(`Me: ${mySelf.age}`)