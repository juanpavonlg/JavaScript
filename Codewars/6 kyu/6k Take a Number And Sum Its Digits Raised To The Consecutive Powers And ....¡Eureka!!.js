//@ts-check

/**
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function sumDigPow(a, b) {
  const ans = [];
  for (let n = a; n <= b; n++) {
    if ([...`${n}`].reduce((a, e, i) => a + (+e) ** (i + 1), 0) === n) {
      ans.push(n);
    }
  }
  return ans;
} // sumDigPow()

console.log(sumDigPow(1, 10));
console.log(sumDigPow(1, 100));
console.log(sumDigPow(90, 100));
