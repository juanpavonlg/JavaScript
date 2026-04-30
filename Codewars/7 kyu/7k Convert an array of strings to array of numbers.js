//@ts-check

/**
 * @param {string[]} stringarray 
 * @returns {number[]}
 */
function toNumberArray(stringarray) {
  return stringarray.map(Number);
} // toNumberArray()

console.log(toNumberArray(["1", "2", "3"]));
