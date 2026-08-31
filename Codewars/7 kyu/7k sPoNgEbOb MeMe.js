//@ts-check

/**
 * @param {string} sentence
 * @returns {string}
 */
function spongeMeme(sentence) {
  return [...sentence]
    .map((e, i) => (i % 2 ? e.toLowerCase() : e.toUpperCase()))
    .join("");
} // spongeMeme()

console.log(spongeMeme("stop Making spongebob Memes!"));
