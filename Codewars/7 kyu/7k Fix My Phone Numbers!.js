//@ts-check

/**
 * @param {string} str
 * @returns {string}
 */
function isItANum(str) {
  str = str.replace(/[\D]/g, "");
  return /^0\d{10}$/.test(str) ? str : "Not a phone number";
} // isItANum()

console.log(isItANum("S:)0207ERGQREG88349F82!efRF)"));
console.log(isItANum("sjfniebienvr12312312312ehfWh"));
console.log(isItANum("0192387415456"));
console.log(isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"));
console.log(isItANum("stop calling me no I have never been in an accident"));
