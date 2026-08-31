//@ts-check

/**
 * @param {number[]} lst
 * @returns {number | null}
 */
function uniqueSum(lst) {
  if (lst.length === 0) {
    return null;
  }
  return [...new Set(lst)].reduce((a, e) => a + e);
} // uniqueSum()

console.log(uniqueSum([1, 2, 3]));
console.log(uniqueSum([1, 3, 8, 1, 8]));
console.log(uniqueSum([-1, -1, 5, 2, -7]));
console.log(uniqueSum([]));
