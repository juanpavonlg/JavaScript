//@ts-check

/**
 * @param {number[]} a
 * @returns {number[]}
 */
function doubleEveryOther(a) {
  return a.map((e, i) => (i % 2 ? 2 * e : e));
} // doubleEveryOther()

console.log(doubleEveryOther([1, 2, 3, 4]));
