//@ts-check

/**
 * @param {string} string 
 * @returns {string[]|string}
 */
function evenChars(string) {
  if (string.length <2 || string.length > 100) {
    return "invalid string";
  }
  return [...string].filter((e, i) => i % 2);
} // evenChars()

console.log(evenChars("abcdefghijklm"));
console.log(evenChars("a"));
