//@ts-check

/**
 * @param {number[]} array
 * @returns {number[]}
 */
function sortArray(array) {
  const odd = array.filter((e) => e % 2).sort((a, b) => a - b);
  return array.map((e) => (e % 2 ? (odd.shift() ?? e) : e));
} // sortArray()

console.log(sortArray([7, 1]));
console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
