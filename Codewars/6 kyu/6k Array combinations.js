//@ts-check

/**
 * @param {number[][]} arr
 * @returns {number}
 */
function solve(arr) {
  return arr.map((e) => new Set(e).size).reduce((a, e) => a * e, 1);
} // solve()

console.log(solve([[1, 2], [4], [5, 6]]));
console.log(
  solve([
    [1, 2],
    [4, 4],
    [5, 6, 6],
  ]),
);
console.log(
  solve([
    [1, 2],
    [3, 4],
    [5, 6],
  ]),
);
console.log(
  solve([
    [1, 2, 3],
    [3, 4, 6, 6, 7],
    [8, 9, 10, 12, 5, 6],
  ]),
);
