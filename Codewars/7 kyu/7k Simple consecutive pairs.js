//@ts-check

/**
 * @param {number[]} ar
 * @returns {number}
 */
function pairs(ar) {
  let count = 0;
  for (let i = 0; i < ar.length; i += 2) {
    if (Math.abs(ar[i] - ar[i + 1]) === 1) {
      count++;
    }
  }
  return count;
} // pairs()

console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]));
