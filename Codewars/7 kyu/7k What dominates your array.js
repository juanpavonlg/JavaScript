//@ts-check

/**
 * @param {number[]} arr
 * @returns {number}
 */
function dominator(arr) {
  const freqs = {};
  return arr.find((e) => (freqs[e] = ++freqs[e] || 1) > arr.length / 2) ?? -1;
} // dominator()

console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3]));
console.log(dominator([1, 2, 3, 4, 5]));
