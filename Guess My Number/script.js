const again = document.querySelector(".again")
const check = document.querySelector(".check")

const hiddenNumber = document.querySelector(".number")
const message = document.querySelector(".message")
const guess = document.querySelector(".guess")
const score = document.querySelector(".score")
const highScore = document.querySelector(".highscore")

let secretNumber = Math.trunc(Math.random() * 20) + 1
let currentScore = 20

check.addEventListener('click', function() {
    const currentGuess = Number(guess.value)
    if (!currentGuess) 
    {
        message.textContent = `❌ Not a number!`
    }
    else if (currentGuess !== secretNumber) 
    {
        setBoard(currentGuess, secretNumber)
    }
    else
    {
        document.querySelector('body').style.backgroundColor = '#60B347'
        setResult(secretNumber, currentScore)
    }
    
    if (currentScore === 0) {
        setResult(secretNumber, currentScore)
    }
})

again.addEventListener('click', function() {
    resetBoard()
})

function setBoard(currentGuess, secretNumber) {
    currentGuess > secretNumber ? message.textContent = `📈 to high...` : message.textContent = `📉 to low...`
    currentScore--
    score.textContent = currentScore
}

function setResult(secretNumber, currentScore) {
    currentScore === 0 ? message.textContent = `☠ You've lost!` : message.textContent = `🏆 You've won!`

    if(Number(highScore.textContent) < currentScore)
        highScore.textContent = currentScore

    hiddenNumber.textContent = secretNumber
    check.disabled = 'true'
    check.textContent = 'X'
}

function resetBoard() {
    document.querySelector('body').style.backgroundColor = '#222'
    secretNumber = Math.trunc(Math.random() * 20) + 1
    currentScore = 20

    score.textContent = currentScore
    hiddenNumber.textContent = '?'
    // highScore.textContent = 0
    guess.value = ''

    message.textContent = `Start guessing...`
    check.disabled = 'false'
    check.textContent = 'Check!'
}