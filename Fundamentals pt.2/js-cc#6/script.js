bills = [125, 555, 44]
tips = []
total = []

const calcTip = billValue => billValue < 50 ? 0 : billValue >= 50 && billValue < 300 ? 0.15 * billValue : 0.2 * billValue

for(let bill of bills) {
    tips.push(calcTip(bill))
    total.push(bill + calcTip(bill))
}

console.log(tips)
console.log(total)