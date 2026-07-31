//@ts-check

/**
 * @param {number} a
 * @param {number} b
 * @returns {boolean}
 */
function vampireTest(a, b) {
  return [...`${a}${b}`].sort().join("") === [...`${a * b}`].sort().join("");
} // vampireTest()

console.log(vampireTest(6, 21));
console.log(vampireTest(10, 11));
