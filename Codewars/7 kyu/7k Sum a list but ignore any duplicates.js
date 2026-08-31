//@ts-check

/**
 * @param {number[]} numList
 * @returns {number}
 */
function sumNoDuplicates(numList) {
  return numList.reduce(
    (a, e) => (numList.indexOf(e) === numList.lastIndexOf(e) ? a + e : a),
    0,
  );
} // sumNoDuplicates()

console.log(sumNoDuplicates([3, 4, 3, 6]));
console.log(sumNoDuplicates([1, 10, 3, 10, 10]));
