// mass in kg's
let markMass = 95
let johnMass = 85

// height in meters
let markHeight = 1.88
let johnHeight = 1.76

let markBMI = calculateBMI(markMass, markHeight)
let johnBMI = calculateBMI(johnMass, johnHeight)

let strOutput = `Mark's BMI is equal to: ${markBMI}
                John's BMI is equal to: ${johnBMI}`
console.log(strOutput)

// more compact way to assign boolean operator would be to write:
// markHigherBMI = markBMI > johnBMI
let markHigherBMI = (markBMI > johnBMI) ? true : false
console.log(markHigherBMI)

function calculateBMI(mass, height) {
    let bmi = mass / (height ** 2)
    return bmi
}