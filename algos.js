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
