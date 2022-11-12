const billValue = 100

const tip = billValue < 50 ? 0 :
            billValue >= 50 && billValue < 300 ? getTheTip(15) :
            getTheTip(20)

console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`)

function getTheTip(tipPercentage) {
    return Math.round(tipPercentage * billValue / 100)
}