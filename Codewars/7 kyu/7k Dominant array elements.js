//@ts-check

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function solve(arr) {
  return arr.filter((e, i) => arr.slice(i + 1).every((x) => x < e));
} // solve()

console.log(solve([1, 21, 4, 7, 5]));
console.log(solve([5, 4, 3, 2, 1]));
