//@ts-check

/**
 * @param {string} str
 * @returns {string}
 */
function encode(str) {
  const letters = "_abcdefghijklmnopqrstuvwxyz";
  return str.replace(/[a-z]/gi, (e) => `${letters.indexOf(e.toLowerCase())}`);
} // encode()

console.log(encode("abc"));
console.log(encode("ABC"));
console.log(encode("codewars"));
console.log(encode("abc-#@5"));
