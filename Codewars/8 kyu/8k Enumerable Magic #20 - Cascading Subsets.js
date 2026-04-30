//@ts-check

/**
 * @param {number[]} array
 * @param {number} n
 * @returns {number[][]}
 */
function eachCons(array, n) {
  return array.slice(n - 1).map((_, i) => array.slice(i, i + n));
} // eachCons()

console.log(eachCons([1, 2, 3, 4], 2));
console.log(eachCons([1, 2, 3, 4], 3));
