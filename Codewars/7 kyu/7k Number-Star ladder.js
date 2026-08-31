//@ts-check

/**
 * @param {number} n 
 * @returns {string}
 */
function pattern(n) {
  const ans = ["1"];
  for (let i = 2; i <= n; i++) {
    ans.push(`1${"*".repeat(i - 1)}${i}`);
  }
  return ans.join("\n");
} // pattern()

console.log(pattern(3));
console.log(pattern(10));
