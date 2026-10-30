//@ts-check

/**
 * @param {string} str
 * @returns {string}
 */
function noRepeat(str) {
  return [...str].find((e) => str.indexOf(e) === str.lastIndexOf(e)) ?? "";
} // noRepeat()

console.log(noRepeat("aabbccdde"));
console.log(noRepeat("wxyz"));
console.log(noRepeat("testing"));
