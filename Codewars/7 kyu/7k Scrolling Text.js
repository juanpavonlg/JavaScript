//@ts-check

/**
 * @param {string} text
 * @returns {string[]}
 */
function scrollingText(text) {
  text = text.toUpperCase();
  return [...text].map((_, i) => text.slice(i) + text.slice(0, i));
} // scrollingText()

console.log(scrollingText("codewars"));
