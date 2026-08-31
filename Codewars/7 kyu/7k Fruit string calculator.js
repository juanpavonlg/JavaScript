//@ts-check

/**
 * @param {string} string
 * @returns {number}
 */
function calculate(string) {
  const [a, b] = (string.match(/\d+/g) ?? []).map(Number);
  return /loses/.test(string) ? a - b : a + b;
} // calculate()

console.log(calculate("Panda has 48 apples and loses 4"));
console.log(calculate("Jerry has 34 apples and gains 6"));
