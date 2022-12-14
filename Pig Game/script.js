'use strict'

// selecting elements
const score0 = document.querySelector('#score--0')
const score1 = document.getElementById('score--1')
const dice = document.querySelector('.dice')

const currentScore0 = document.getElementById('current--0')
const currentScore1 = document.getElementById('current--1')

const btnNewGame = document.querySelector('.btn--new')
const btnDiceRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')

// starting conditions
score0.textContent = 0
score1.textContent = 0
hideDice()

// state variables
let score = 0
let player0CurrentScore = 0
let player1CurrentScore = 0
let activePlayer = checkActivePlayer()

const diceRoll = function() {
    return Math.floor(Math.random() * 6) + 1
}

function resetScore() {
    score = 0
    score0.textContent = 0
    score1.textContent = 0
}

function hideDice() {
    dice.classList.add('hidden')
}

function showDice() {
    dice.classList.remove('hidden')
}

function displayDice(roll) {
    dice.src = `images/dice-${roll}.png`
    showDice()
    if (checkActivePlayer() === player0) 
    {
        updateScore(roll)
        score0.textContent = score
    }
    else
    {
        updateScore(roll)
        score1.textContent = score
    }
}

function updateScore(roll) {
    if (roll === 1)
    {
        resetCurrentScore(activePlayer)
        resetScore()
        switchPlayers()
        hideDice()
    }
    else
    {
        score +=roll
    }
}

function switchPlayers() {
    if (activePlayer === player0)
    {
        activePlayer.classList.remove('player--active')
        activePlayer = player1
        activePlayer.classList.add('player--active')
    }
    else
    {
        activePlayer.classList.remove('player--active')
        activePlayer = player0
        activePlayer.classList.add('player--active')
    }
}

function checkActivePlayer() {
    if (player0.classList.contains('player--active'))
    {
        return player0
    }
    else
    {
        return player1
    }
}

function resetCurrentScore(player) {    
    if (player === player0)
    {
        player0CurrentScore = 0
        currentScore0.textContent = player0CurrentScore
    }
    else
    {
        player1CurrentScore = 0
        currentScore1.textContent = player1CurrentScore
    }
}

function updateCurrentScore() {    
    if (activePlayer === player0)
    {
        player0CurrentScore += score
        currentScore0.textContent = player0CurrentScore
    }
    else
    {
        player1CurrentScore += score
        currentScore1.textContent = player1CurrentScore
    }
}

function declareWinner(player) {
    dice.src = `images/victory.png`
    player.classList.add('player--winner')
}

function disableButtons() {
    btnDiceRoll.disabled = true
    btnHold.disabled = true
}

function enableButtons() {
    btnDiceRoll.disabled = false
    btnHold.disabled = false
}

function resetBackground() {
    activePlayer.classList.remove('player--winner')
}

btnDiceRoll.addEventListener('click', function() {
    const roll = diceRoll()
    displayDice(roll)
})

btnHold.addEventListener('click', function() {
    updateCurrentScore()

    if (Number(currentScore0.textContent) >= 100 || Number(currentScore1.textContent) >= 100)
    {
        resetScore()
        disableButtons()
        declareWinner(activePlayer)
    }
    else
    {
        resetScore()
        switchPlayers()
        hideDice()
        enableButtons()
    }
})

btnNewGame.addEventListener('click', function() {
    resetBackground()
    switchPlayers()
    enableButtons()
    hideDice()
    resetCurrentScore(player0)
    resetCurrentScore(player1)
})