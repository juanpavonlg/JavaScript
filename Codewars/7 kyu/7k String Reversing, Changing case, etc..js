//@ts-check

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
 */
function reverseAndMirror(s1, s2) {
  s1 = switchCase(s1);
  s2 = switchCase(s2);
  return `${reverse(s2)}@@@${reverse(s1)}${s1}`;
} // reverseAndMirror()

/**
 * @param {string} s
 * @returns {string}
 */
function switchCase(s) {
  return s.replace(/./g, (e) =>
    e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase(),
  );
} // switchCase()

/**
 * @param {string} s
 * @returns {string}
 */
function reverse(s) {
  return [...s].reverse().join("");
} // reverse()

console.log(reverseAndMirror("FizZ", "buZZ"));
console.log(reverseAndMirror("String Reversing", "Changing Case"));
