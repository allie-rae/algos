// Two Num Sum - Return two numbers that sum to the target sum
function twoNumberSum(array, targetSum) {
  let seenNumbers = new Set();

  for (let number of array) {
    let complement = targetSum - number;

    if (seenNumbers.has(complement)) {
      return [complement, number];
    }

    seenNumbers.add(number);
  }

  return [];
}

// Validate Subsequence - Return true if the sequence is a subsequence of the array
function isValidSubsequence(array, sequence) {
  let arrayPointer = 0;
  let subPointer = 0;

  while (
    arrayPointer <= array.length - 1 ||
    subPointer <= subPointer.length - 1
  ) {
    if (array[arrayPointer] === sequence[subPointer]) {
      arrayPointer++;
      subPointer++;
    } else {
      arrayPointer++;
    }
  }

  if (subPointer === sequence.length) {
    return true;
  }

  return false;
}

// Sorted Squared Array - Return a new array of the squared values of the input array
// Solution 1
function sortedSquaredArray(array) {
  const squaredArray = [];
  for (let i = 0; i < array.length; i++) {
    squaredArray.push(array[i] * array[i]);
  }
  squaredArray.sort((a, b) => a - b);
  return squaredArray;
}

// Solution 2
function sortedSquaredArray(array) {
  let startPointer = 0;
  let endPointer = array.length - 1;
  const squaredArray = [];

  while (startPointer <= endPointer) {
    if (Math.abs(array[startPointer]) > Math.abs(array[endPointer])) {
      squaredArray.unshift(array[startPointer] * array[startPointer]);
      startPointer++;
    } else {
      squaredArray.unshift(array[endPointer] * array[endPointer]);
      endPointer--;
    }
  }
  return squaredArray;
}

// Tournament Winner - Return the winning team of the tournament
// Solution 1
function tournamentWinner(competitions, results) {
  const teamScores = {};

  for (let i = 0; i < competitions.length; i++) {
    if (!(competitions[i][0] in teamScores)) {
      teamScores[competitions[i][0]] = 0;
    }
    if (!(competitions[i][1] in teamScores)) {
      teamScores[competitions[i][1]] = 0;
    }
    if (results[i]) {
      teamScores[competitions[i][0]] = teamScores[competitions[i][0]] + 3;
    } else {
      teamScores[competitions[i][1]] = teamScores[competitions[i][1]] + 3;
    }
  }

  let winner = "";
  let winnerScore = 0;

  for (const [key, value] of Object.entries(teamScores)) {
    if (winnerScore < value) {
      winner = key;
      winnerScore = value;
    }
  }

  return winner;
}

// Solution 2
function tournamentWinner(competitions, results) {
  const teamScores = {};
  let winner = "";
  let winnerScore = 0;

  for (let i = 0; i < competitions.length; i++) {
    if (!(competitions[i][0] in teamScores)) {
      teamScores[competitions[i][0]] = 0;
    }
    if (!(competitions[i][1] in teamScores)) {
      teamScores[competitions[i][1]] = 0;
    }
    if (results[i]) {
      teamScores[competitions[i][0]] = teamScores[competitions[i][0]] + 3;
      if (teamScores[competitions[i][0]] > winnerScore) {
        winner = competitions[i][0];
        winnerScore = teamScores[competitions[i][0]];
      }
    } else {
      teamScores[competitions[i][1]] = teamScores[competitions[i][1]] + 3;
      if (teamScores[competitions[i][1]] > winnerScore) {
        winner = competitions[i][1];
        winnerScore = teamScores[competitions[i][1]];
      }
    }
  }

  return winner;
}

// Non-Constructible Change - Return the minimum amount of change that cannot be created
function nonConstructibleChange(coins) {
  let sortedCoins = coins.sort((a, b) => a - b);
  if (sortedCoins[0] !== 1) {
    return 1;
  }

  let change = 0;
  for (let i = 0; i < sortedCoins.length; i++) {
    if (sortedCoins[i] > change + 1) {
      return change + 1;
    }
    change = change + sortedCoins[i];
  }

  return change + 1;
}
