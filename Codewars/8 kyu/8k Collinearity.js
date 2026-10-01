//@ts-check

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns {boolean}
 */
function collinearity(x1, y1, x2, y2) {
  return x1 * y2 === y1 * x2;
} // collinearity()

console.log(collinearity(1, 2, 2, 4));
console.log(collinearity(1, 1, 1, 1));
console.log(collinearity(1, 1, 6, 1));
console.log(collinearity(1, 2, -1, -2));
console.log(collinearity(1, 2, 1, -2));
console.log(collinearity(4, 0, 11, 0));
console.log(collinearity(0, 1, 6, 0));
console.log(collinearity(4, 4, 0, 4));
console.log(collinearity(0, 0, 0, 0));
console.log(collinearity(0, 0, 1, 0));
console.log(collinearity(5, 7, 0, 0));
