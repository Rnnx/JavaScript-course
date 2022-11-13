const dolphinsScore = [44, 23, 71]
const koalasScore = [65, 54, 49]

const calcAverage = scoreArray => scoreArray.reduce((a, b) => a + b, 0) / scoreArray.length

const checkWinner = function checkWinner(avgDolphins, avgKoalas) {
    return avgDolphins > avgKoalas ? `Dolphins win (${avgDolphins} vs. ${avgKoalas})` : `Koalas win (${avgKoalas} vs. ${avgDolphins})`
}

console.log(checkWinner(calcAverage(dolphinsScore), calcAverage(koalasScore)))