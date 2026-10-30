//@ts-check

/**
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
function workOnStrings(a, b) {
  return convert(a, count(b)) + convert(b, count(a));
} // workOnStrings()

/**
 * @param {string} str
 * @returns {{[key: string]: number}}
 */
function count(str) {
  return [...str.toLowerCase()].reduce(
    (a, e) => ((a[e] = (a[e] ?? 0) + 1), a),
    {},
  );
} // count()

/**
 * @param {string} ch
 * @returns {string}
 */
function changeCase(ch) {
  return ch > "Z" ? ch.toUpperCase() : ch.toLowerCase();
} // changeCase()

/**
 * @param {string} str
 * @param {{[key: string]: number}} freq
 * @returns {string}
 */
function convert(str, freq) {
  return [...str]
    .map((e) => (freq[e.toLowerCase()] % 2 ? changeCase(e) : e))
    .join("");
} // convert()

console.log(workOnStrings("abc", "cde"));
console.log(workOnStrings("ab", "aba"));
console.log(workOnStrings("abab", "bababa"));
