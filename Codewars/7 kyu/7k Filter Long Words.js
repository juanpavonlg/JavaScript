//@ts-check

/**
 * @param {string} sentence
 * @param {number} n
 * @returns {string[]}
 */
function filterLongWords(sentence, n) {
  return sentence.split(" ").filter((e) => e.length > n);
} // filterLongWords()

console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4));
