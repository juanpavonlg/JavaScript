//@ts-check

/**
 * @param {string} sequence
 * @returns {number}
 */
function findMissingNumber(sequence) {
  if (!sequence) {
    return 0;
  }
  if (/[^\d ]/.test(sequence)) {
    return 1;
  }
  const nums = sequence
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] !== i) {
      return i;
    }
  }
  return 0;
} // findMissingNumber()

console.log(findMissingNumber("1 2 3 4"));
console.log(findMissingNumber("1 2 4 3"));
console.log(findMissingNumber("2 1 3 a"));
console.log(findMissingNumber("1 3 2 5"));
console.log(findMissingNumber("1 5"));
console.log(findMissingNumber(""));
