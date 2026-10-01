//@ts-check

/**
 * @param {number} x1
 * @param {number} x2
 * @returns {[number, number, number]}
 */
function quadratic(x1, x2) {
  return [1, -x1 + -x2, x1 * x2];
} // quadratic()

console.log(quadratic(1, 2));
console.log(quadratic(0, 1));
