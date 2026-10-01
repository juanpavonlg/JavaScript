//@ts-check

/**
 * @param {string} str 
 * @returns {boolean}
 */
function password(str) {
  return /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}$/.test(str);
} // password()

console.log(password("Abcd1234"));
console.log(password("Abcd123"));
console.log(password("abcd1234"));
console.log(password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"));
console.log(password("ABCD1234"));
console.log(password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"));
console.log(password("!@#$%^&*()-_+={}[]|\:;?/>.<,"));
