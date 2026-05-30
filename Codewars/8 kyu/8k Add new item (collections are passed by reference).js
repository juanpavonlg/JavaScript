//@ts-check

/**
 * @param {number[]} listOfNumbers
 * @returns {number[]}
 */
function addExtra(listOfNumbers) {
  return [...listOfNumbers, (100 * Math.random()) | 0];
} // addExtra()

console.log(addExtra([1, 2, 3]));
console.log(addExtra([1, 2]));
console.log(addExtra([]));
const arr = [1, 2, 3];
console.log(addExtra(arr), arr);
