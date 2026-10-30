//@ts-check

/**
 * @param {number[]} array
 * @returns {number}
 */
function sumSquares(array) {
  return array.reduce((a, e) => a + e * e, 0);
} // sumSquares()

console.log(sumSquares([1, 2, 3, 4, 5]));
console.log(sumSquares([7, 3, 9, 6, 5]));
console.log(sumSquares([11, 13, 15, 18, 2]));
