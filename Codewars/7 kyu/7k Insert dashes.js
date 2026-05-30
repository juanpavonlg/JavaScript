//@ts-check

/**
 * @param {number} num
 * @returns {string}
 */
function insertDash(num) {
  return `${num}`.replace(/([13579])(?=[13579])/g, "$1-");
} // insertDash()

console.log(insertDash(454793));
console.log(insertDash(0));
console.log(insertDash(1));
console.log(insertDash(13579));
console.log(insertDash(86420));
