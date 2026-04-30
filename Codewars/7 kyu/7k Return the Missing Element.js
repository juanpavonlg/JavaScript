//@ts-check

/**
 * @param {number[]} superImportantArray
 * @returns {number}
 */
function getMissingElement(superImportantArray) {
  return superImportantArray.reduce((a, e) => a - e, 45);
} // getMissingElement()

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]));
console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]));
