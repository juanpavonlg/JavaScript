//@ts-check
/**
 * @typedef {Object} Change
 * @property {number} Nickels
 * @property {number} Pennies
 * @property {number} Dimes
 * @property {number} Quarters
 */

/**
 * @param {number} cents
 * @returns {Change}
 */
function looseChange(cents) {
  cents = Math.max(cents | 0, 0);
  const quarters = (cents / 25) | 0;
  cents %= 25;
  const dimes = (cents / 10) | 0;
  cents %= 10;
  const nickels = (cents / 5) | 0;
  cents %= 5;
  return { Nickels: nickels, Pennies: cents, Dimes: dimes, Quarters: quarters };
} // looseChange()

console.log(looseChange(56));
console.log(looseChange(-435));
console.log(looseChange(4.935));
