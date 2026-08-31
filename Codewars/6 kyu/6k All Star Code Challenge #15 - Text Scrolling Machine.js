//@ts-check

/**
 * @param {string} str
 * @returns {string[]}
 */
function rotate(str) {
  return [...str].map((_, i) => str.slice(i + 1) + str.slice(0, i + 1));
} // rotate()

console.log(rotate("Hello"));
