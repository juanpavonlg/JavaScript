//@ts-check

/**
 * @param {string} s
 * @returns {string}
 */
function moveTen(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const shifted = "klmnopqrstuvwxyzabcdefghij";
  return s.replace(/[a-z]/g, (e) => shifted[alphabet.indexOf(e)]);
} // moveTen()

console.log(moveTen("testcase"));
console.log(moveTen("codewars"));
console.log(moveTen("exampletesthere"));
