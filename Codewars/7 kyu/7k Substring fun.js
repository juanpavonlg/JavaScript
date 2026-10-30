//@ts-check

/**
 * @param {string[]} words 
 * @returns {string}
 */
function nthChar(words) {
  return words.map((e, i) => e[i]).join("");
} // nthChar()

console.log(nthChar(["yoda", "best", "has"]));
