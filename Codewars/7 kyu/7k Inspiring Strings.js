//@ts-check

/**
 * @param {string} stringOfWords
 * @returns {string}
 */
function longestWord(stringOfWords) {
  return stringOfWords
    .split(" ")
    .reduce((a, e) => e.length >= a.length ? e : a);
} // longestWord()

console.log(longestWord("red white blue"));
console.log(longestWord("red blue gold"));
