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
