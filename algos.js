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
