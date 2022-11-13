const dolphinsScore = [96, 108, 89]
const koalaScore = [88, 91, 110]

const dolphinsAverage = getAverage(dolphinsScore)
const koalaAverage = getAverage(koalaScore)

// declare winner
dolphinsAverage > koalaAverage ? console.log(`The Dolphins have won with score (${dolphinsAverage}) over Koalas (${koalaAverage})`) :
(dolphinsAverage === koalaAverage) ? console.log(`The tie! Both teams have got the same score (${dolphinsScore})`) : 
console.log(`The Koalas have won with score (${koalaAverage}) over Dolphins (${dolphinsAverage})`);

function getAverage(scoreArray) {
    return scoreArray.reduce((a, b) => a + b, 0) / scoreArray.length
}