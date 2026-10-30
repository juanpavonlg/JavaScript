//@ts-check

/**
 * @param {number[][]} matrix 
 * @returns {number}
 */
function diagonalSum(matrix) {
  return matrix.reduce((a, e, i) => a + e[i], 0);
} // diagonalSum()

console.log(
  diagonalSum([
    [1, 2],
    [3, 4],
  ]),
);
console.log(
  diagonalSum([
    [5, 9, 1, 0],
    [8, 7, 2, 3],
    [1, 4, 1, 9],
    [2, 3, 8, 2],
  ]),
);
