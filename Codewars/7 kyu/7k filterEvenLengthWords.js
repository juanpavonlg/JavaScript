//@ts-check

/**
 * @param {string[]} words
 * @returns {string[]}
 */
function filterEvenLengthWords(words) {
  return words.filter((e) => e.length % 2 === 0);
} // filterEvenLengthWords()

console.log(filterEvenLengthWords(["One", "Two", "Three", "Four"]));
