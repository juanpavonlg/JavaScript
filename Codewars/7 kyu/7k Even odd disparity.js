//@ts-check

/**
 * @param {(number | string)[]} a
 * @returns {number}
 */
function solve(a) {
  return a.reduce(
    (a, e) => a + (typeof e === "number" ? (+e % 2 ? -1 : 1) : 0),
    0,
  );
} // solve()

console.log(solve([0, 1, 2, 3]));
console.log(solve(["a", "b"]));
console.log(solve([13, 6, 8, 15, 4, 8, 13]));
