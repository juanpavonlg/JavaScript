//@ts-check

/**
 * @param {number[]} array
 * @param {number} n
 * @returns {number[]}
 */
function findAll(array, n) {
  const ans = [];
  array.forEach((e, i) => {
    if (e === n) {
      ans.push(i);
    }
  });
  return ans;
} // findAll()

console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3));
