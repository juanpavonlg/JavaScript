//@ts-check

/**
 * @param {string} hitCount
 * @returns {number[][]}
 */
function counterEffect(hitCount) {
  return [...hitCount].map((e) => Array.from({ length: +e + 1 }, (_, i) => i));
} // counterEffect()

console.log(counterEffect("1250"));
console.log(counterEffect("0050"));
console.log(counterEffect("0000"));
