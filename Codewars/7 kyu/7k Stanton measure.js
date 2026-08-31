//@ts-check

/**
 * @param {number[]} a
 * @returns {number}
 */
function stantonMeasure(a) {
  /** @type {(n: number) => number} */
  const count = (n) => a.filter((e) => e === n).length;
  return count(count(1));
} // stantonMeasure()

console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]));
console.log(stantonMeasure([1, 4, 1, 2, 11, 2, 3, 1]));
