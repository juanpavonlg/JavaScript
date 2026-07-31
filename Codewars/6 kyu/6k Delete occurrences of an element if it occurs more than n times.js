//@ts-check

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */
function deleteNth(arr, n) {
  /** @type {{[key: number]: number}} */
  const freq = {};
  return arr.filter((e) => (freq[e] = freq[e] + 1 || 1) <= n);
} // deleteNth()

console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2));
console.log(deleteNth([20, 37, 20, 21], 1));
