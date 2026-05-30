//@ts-check

/**
 *
 * @param {number[]} collection
 * @returns {number}
 */
function mostFrequentItemCount(collection) {
  const freqs = {};
  collection.forEach((n) => {
    freqs[n] = ++freqs[n] || 1;
  });
  return Math.max(...Object.values(freqs), 0);
} // mostFrequentItemCount()

console.log(
  mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]),
);
console.log(mostFrequentItemCount([]));
