//@ts-check

/**
 * @param {number[]} arr 
 * @returns {number[]}
 */
function twoHighest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2);
} // twoHighest()

console.log(twoHighest([4, 10, 10, 9]));
console.log(twoHighest([1, 1, 1]));
console.log(twoHighest([]));
