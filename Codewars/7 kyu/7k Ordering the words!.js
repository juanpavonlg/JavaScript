//@ts-check

/**
 * @param {string} s
 * @returns {string}
 */
function orderWord(s) {
  return s ? [...s].sort().join("") : "Invalid String!";
} // orderWord()

console.log(orderWord("hello world"));
console.log(orderWord("bobby"));
console.log(orderWord(""));
console.log(orderWord("!Hi You!"));
