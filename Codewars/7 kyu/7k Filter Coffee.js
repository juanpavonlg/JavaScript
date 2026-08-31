//@ts-check

/**
 * @param {number} budget
 * @param {number[]} prices
 * @returns {string}
 */
function search(budget, prices) {
  prices.sort((a, b) => a - b);
  return prices.filter((e) => e <= budget).join();
} // search()

console.log(search(3, [6, 1, 2, 9, 2]));
console.log(search(14, [7, 3, 23, 9, 14, 20, 7]));
console.log(search(0, [6, 1, 2, 9, 2]));
