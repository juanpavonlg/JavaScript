//@ts-check

/**
 * @param {string} username
 * @returns {boolean}
 */
function validateUsr(username) {
  const res = /^[0-9_a-z]{4,16}$/.test(username);
  return res;
} // validateUsr()

console.log(validateUsr("asddsa"));
console.log(validateUsr("a"));
console.log(validateUsr("Hass"));
console.log(validateUsr("Hasd_12assssssasasasasasaasasasasas"));
console.log(validateUsr(""));
console.log(validateUsr("____"));
console.log(validateUsr("012"));
console.log(validateUsr("0123"));
console.log(validateUsr("1234567890abcdefg"));
console.log(validateUsr("p1pp1"));
console.log(validateUsr("asd43 34"));
console.log(validateUsr("asd43_34"));
console.log(validateUsr("abcd"));
