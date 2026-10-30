//@ts-check

/**
 * @param {number} n
 * @returns {number[]} 
 */
function climb(n) {
  /** @type {number[]} */
  let ans = [];
  /** @type {number[]} */
  const sol = [];

  /**
   * @param {number} m 
   */
  function backtrack(m) {
    if (m === n) {
      ans = [...sol];
      return
    } else if (m > n) {
      return;
    }
    sol.push(m);
    backtrack(m + m);
    backtrack(m + m + 1);
    sol.pop();
  } // backtrack()

  backtrack(1);
  return [...ans, n];
} // climb()

console.log(climb(1));
console.log(climb(10));
console.log(climb(13));
