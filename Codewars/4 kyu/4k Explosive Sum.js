//@ts-check

/**
 * @param {number} num
 * @returns {number}
 */
function sum(num) {
  const dp = new Array(num + 1).fill(0);
  dp[0] = 1;
  for (let n = 1; n <= num; n++) {
    for (let i = n; i <= num; i++) {
      dp[i] += dp[i - n];
    }
  }
  return dp[num];
} // sum()

console.log(sum(1));
console.log(sum(2));
console.log(sum(3));
console.log(sum(4));
console.log(sum(5));
console.log(sum(10));
console.log(sum(50));
console.log(sum(80));
console.log(sum(100));
