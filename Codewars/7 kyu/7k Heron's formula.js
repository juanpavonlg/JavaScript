//@ts-check

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */
function heron(a, b, c) {
  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
} // heron()

console.log(heron(3, 4, 5));
console.log(heron(4, 4, 4));
