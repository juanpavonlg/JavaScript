//@ts-check

/**
 * @param {number|null} price
 * @returns {number}
 */
function excludingVatPrice(price) {
  return price === null ? -1 : +(price / 1.15).toFixed(2);
} // excludingVatPrice()

console.log(excludingVatPrice(230));
console.log(excludingVatPrice(null));
