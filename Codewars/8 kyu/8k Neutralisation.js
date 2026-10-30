//@ts-check

/**
 * @param {string} s1 
 * @param {string} s2 
 * @returns {string}
 */
function neutralise(s1, s2) {
  return s1.replace(/[+-]/g, (e, i) => e === s2[i] ? e : "0");
} // neutralise()

console.log(neutralise("+-+", "+--"));
console.log(neutralise("--++--", "++--++"));
console.log(neutralise("-+-+-+", "-+-+-+"));
console.log(neutralise("-++-", "-+-+"));
