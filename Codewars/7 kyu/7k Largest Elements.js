//@ts-check

/**
 * @param {number} n
 * @param {number[]} array
 * @returns {number[]}
 */
function largest(n, array) {
  return array.sort((a, b) => a - b).slice(array.length - n);
} // largest()

console.log(largest(2, [7, 6, 5, 4, 3, 2, 1]));
