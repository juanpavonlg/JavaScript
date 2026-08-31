//@ts-check

/**
 * @param {string} str 
 * @returns {boolean}
 */
function tripleX(str) {
  return /^[^x]*x(?=xx)/.test(str);
} // tripleX()

console.log(tripleX("abraxxxas"));
console.log(tripleX("xoxotrololololololoxxx"));
console.log(tripleX("softX kitty, warm kitty, xxxxx"));
console.log(tripleX("softx kitty, warm kitty, xxxxx"));
