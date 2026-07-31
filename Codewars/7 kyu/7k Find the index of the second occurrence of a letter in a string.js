//@ts-check

/**
 * @param {string} s
 * @param {string} symbol
 * @returns {number}
 */
function secondSymbol(s, symbol) {
  return s.indexOf(symbol, s.indexOf(symbol) + 1);
} // secondSymbol()

console.log(secondSymbol("Hello world!!!", "l"));
console.log(secondSymbol("Hello world!!!", "A"));
