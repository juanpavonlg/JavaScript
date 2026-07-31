//@ts-check

/**
 * @param {string} s
 * @returns {string}
 */
function mixedFraction(s) {
  let [x, y] = s.split("/").map(Number);
  if (y === 0) {
    throw Error("Division by zero");
  }
  if (x === 0) {
    return "0";
  }
  const sign = x / y < 0 ? "-" : "";
  [x, y] = [Math.abs(x), Math.abs(y)];
  const div = gcd(x, y);
  [x, y] = [x / div, y / div];
  const a = (x / y) | 0;
  x %= y;
  return `${sign}${a || ""}${a && x ? " " : ""}${x ? `${x}/${y}` : ""}`;
} // mixedFraction()

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
} // gcd()

console.log(mixedFraction("42/9"));
console.log(mixedFraction("6/3"));
console.log(mixedFraction("4/6"));
console.log(mixedFraction("0/18891"));
console.log(mixedFraction("-10/7"));
console.log(mixedFraction("0/0"));
