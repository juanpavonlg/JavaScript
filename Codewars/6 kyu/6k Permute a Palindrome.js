//@ts-check

/**
 * @param {string} input 
 * @returns {boolean}
 */
function permuteAPalindrome(input) {
  /** @type {{[key: string]: number}} */
  const freq = {};
  for (const ch of input) {
    freq[ch] = (freq[ch] ?? 0) + 1;
  }
  return Object.values(freq).filter((e) => e % 2).length < 2;
} // permuteAPalindrome()

console.log(permuteAPalindrome("madam"));
console.log(permuteAPalindrome("adamm"));
console.log(permuteAPalindrome("junk"));
