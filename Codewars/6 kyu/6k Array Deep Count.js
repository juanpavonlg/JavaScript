//@ts-check

/**
 *
 * @param {any[]} a
 * @returns {number}
 */
function deepCount(a) {
  return a.reduce(
    (acc, ele) => (acc + (Array.isArray(ele) ? deepCount(ele) : 0)),
    a.length,
  );
} // deepCount()

console.log(deepCount([]));
console.log(deepCount([1, 2, 3]));
console.log(deepCount(["x", "y", ["z"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([[[]], 11, [[]]]));
