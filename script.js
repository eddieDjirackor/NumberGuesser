let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, compGuess, targetNumber) => {
  if (humanGuess < 0 || humanGuess > 9) {
    alert ('Number out of range ( Range: 0-9)');
  }
  const humanDifference = Math.abs(humanGuess - targetNumber);
  const compDifference = Math.abs(compGuess - targetNumber);
  if (humanDifference <= compDifference) {
    return true;
  } else {
    return false;
  }
};

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
};

/*console.log(generateTarget());
console.log(compareGuesses(3, 7));
updateScore('human');
console.log(humanScore);
advanceRound();
console.log(currentRoundNumber);*/