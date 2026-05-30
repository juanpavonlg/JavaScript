//@ts-check

/**
 * @param {*[]} arr
 * @returns {*[]}
 */
function duplicates(arr) {
  return [...new Set(arr.filter((e, i, a) => a.slice(0, i).indexOf(e) !== -1))];
} // duplicates()

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]));
console.log(duplicates([0, 1, 2, 3, 4, 5]));
