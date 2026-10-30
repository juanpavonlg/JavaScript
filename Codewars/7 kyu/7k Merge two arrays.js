//@ts-check

/**
 *
 * @param {number[] | string[]} a
 * @param {number[] | string[]} b
 * @returns {(number | string)[]}
 */
function mergeArrays(a, b) {
  if (a.length === 0) {
    return b;
  }
  if (b.length === 0) {
    return a;
  }
  return [a[0], b[0], ...mergeArrays(a.slice(1), b.slice(1))];
} // mergeArrays()

console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]));
console.log(mergeArrays([1, 2, 3], ["a", "b", "c", "d", "e", "f"]));
