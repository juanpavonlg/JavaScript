//@ts-check

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function solve(arr) {
  const copy = [...arr].sort((a, b) => a - b);
  return Array.from({ length: copy.length }, (e, i) =>
    i % 2 ? (copy.shift() ?? e) : (copy.pop() ?? e),
  );
} // solve()

console.log(solve([15, 11, 10, 7, 12]));
