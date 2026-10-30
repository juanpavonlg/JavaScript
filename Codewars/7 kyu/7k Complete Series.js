//@ts-check

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function completeSeries(arr) {
  return new Set(arr).size === arr.length
    ? [...Array(Math.max(...arr) + 1).keys()]
    : [0];
} // completeSeries()

console.log(completeSeries([2, 1]));
console.log(completeSeries([1, 4, 4, 6]));
console.log(completeSeries([0, 1]));
console.log(completeSeries([1, 4, 6]));
console.log(completeSeries([3, 4, 5]));
console.log(completeSeries([0, 1, 0]));
