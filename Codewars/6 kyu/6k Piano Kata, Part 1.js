//@ts-check

/**
 * @param {number} keyPressCount
 * @returns {string}
 */
function blackOrWhiteKey(keyPressCount) {
  return ["black", "white"][+"101101011010"[((keyPressCount - 1) % 88) % 12]];
} // blackOrWhiteKey()

console.log(blackOrWhiteKey(1));
console.log(blackOrWhiteKey(12));
console.log(blackOrWhiteKey(42));
console.log(blackOrWhiteKey(100));
console.log(blackOrWhiteKey(2017));
