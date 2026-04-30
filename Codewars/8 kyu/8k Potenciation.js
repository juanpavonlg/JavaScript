//@ts-check

/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function power(x, y) {
  if (y === 0) {
    return 1;
  }
  if (y % 2 === 0) {
    return power(x * x, y / 2);
  }
  return x * power(x, y - 1);
} // power()

console.log(power(1, 701270));
console.log(power(2, 2));
console.log(power(3, 2));
console.log(power(-1, 40));
