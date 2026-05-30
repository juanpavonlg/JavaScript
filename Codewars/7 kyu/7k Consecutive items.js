//@ts-check

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {boolean}
 */
function consecutive(arr, a, b) {
  return arr.some((e, i) => e === a && (arr[i - 1] === b || arr[i + 1] === b));
  // return Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1;
} // consecutive()

console.log(consecutive([1, 3, 5, 7], 3, 7));
console.log(consecutive([1, 3, 5, 7], 3, 1));
console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4));
