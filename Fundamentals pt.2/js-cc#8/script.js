
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

const calcTip = billValue => billValue < 50 ? 0 :
                billValue >= 50 && billValue < 300 ? billValue * .15 :
                billValue * .2

for (const bill of bills) {
    const tip = calcTip(bill)
    tips.push(tip)
    totals.push(bill + tip)
}

const calcAverage = arr => arr.reduce((a, b) => a + b, 0) / arr.length