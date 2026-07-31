//@ts-check

/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
function getLargerNumbers(a, b) {
  return a.map((e, i) => Math.max(e, b[i]));
} // getLargerNumbers()

const arr1 = [13, 64, 15, 17, 88];
const arr2 = [23, 14, 53, 17, 80];
console.log(getLargerNumbers(arr1, arr2));
