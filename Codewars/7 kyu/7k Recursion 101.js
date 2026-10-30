//@ts-check

/**
 * @param {number} a 
 * @param {number} b 
 * @returns {[number, number]}
 */
function solve(a, b) {
  if (a === 0 || b === 0) {
    return [a, b];
  } else if (a >= 2 * b) {
    return solve(a - 2 * b, b);
  } else if (b >= 2 * a) {
    return solve(a, b - 2 * a);
  }
  return [a, b];
} // solve()

console.log(solve(6, 19));
console.log(solve(2, 1));
console.log(solve(22, 5));
console.log(solve(2, 10));
