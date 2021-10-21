let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (num1, num2) => {
    return (num1 - num2) * 1;
}

const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    if (!(userGuess >= 0 && userGuess <= 9)) {
        alert('You have entered an invalid selection. Please select a number between 0 and 9.');
    }
    else if (getAbsoluteDistance(secretTarget, userGuess) < getAbsoluteDistance(secretTarget, computerGuess)) {
        return true;
    } else {
        return false;
    }
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
    
}

const advanceRound = () => {
    currentRoundNumber += 1;
}

