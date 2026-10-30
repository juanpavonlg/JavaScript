//@ts-check

/**
 * @param {string} s
 * @returns {boolean}
 */
function alphabetic(s) {
  return [...s.slice(1)].every((e, i) => e >= s[i]);
} // alphabetic()

console.log(alphabetic("kata"));
console.log(alphabetic("ant"));
console.log(alphabetic(""));
