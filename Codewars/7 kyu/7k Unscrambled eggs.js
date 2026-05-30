//@ts-check

/**
 * @param {string} word 
 * @returns {string}
 */
function unscrambleEggs(word) {
  return word.replace(/egg/g, "");
} // unscrambleEggs()

console.log(unscrambleEggs("Beggegeggineggneggeregg"));
