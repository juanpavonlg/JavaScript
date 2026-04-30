//@ts-check

/**
 * @param  {...number} arr
 * @returns {number}
 */
function sum(...arr) {
  return arr.reduce((a, e) => a + e);
} // sum()

console.log(sum(1, 2, 3));
console.log(sum(8, 2));
console.log(sum(1, 2, 3, 4, 5));
