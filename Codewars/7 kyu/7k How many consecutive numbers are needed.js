//@ts-check

/**
 * @param {number[]} array
 * @returns {number}
 */
function consecutive(array) {
  const len = array.length;
  return len ? Math.max(...array) - Math.min(...array) - len + 1 : 0;
} // consecutive()

console.log(consecutive([4, 8, 6]));
console.log(consecutive([-1, -5]));
console.log(consecutive([1]));
console.log(consecutive([]));
