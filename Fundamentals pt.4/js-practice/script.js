"use strict"

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