const marksMass = document.querySelector('#mark-weight')
const marksHeight = document.querySelector('#mark-height')
const johnsMass = document.querySelector('#john-weight')
const johnsHeight = document.querySelector('#john-height')
const resultString = document.querySelector('#result')
const compareBtn = document.querySelector('#compare-btn-id')

let markBMI
let johnBMI

compareBtn.addEventListener('click', function() {
    markBMI = calculateBMI(marksMass.value, marksHeight.value)
    johnBMI = calculateBMI(johnsMass.value, johnsHeight.value)

    resultString.textContent = ( markBMI > johnBMI ? `Mark's BMI (${markBMI}) is higher than John's (${johnBMI})` : 
    markBMI === johnBMI ? `Guys BMI's are the same lol` : `John's BMI (${johnBMI}) is higher than Mark's (${markBMI})` )
})

function calculateBMI(mass, height) {
    let bmi = mass / height ** 2
    return bmi
}