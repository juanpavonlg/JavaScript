//@ts-check

/**
 * @param {number} sum
 * @param {number} count
 * @returns {[number, string, string] | []}
 */
function findAll(sum, count) {
  /** @type {string[]} */
  const ans = [];

  /**
   * @param {string} num
   * @param {number} dig
   * @param {number} add
   * @returns {void}
   */
  function backtrack(num, dig, add) {
    if (num.length === count && add === sum) {
      ans.push(num);
      return;
    }
    for (let i = dig; i <= 9 && num.length < count; i++) {
      backtrack(num + i, i, add + i);
    }
  } // backtrack()

  backtrack("", 1, 0);
  return ans.length ? [ans.length, ans[0], ans.at(-1) ?? ""] : [];
} // findAll()

console.log(findAll(10, 3));
console.log(findAll(27, 3));
console.log(findAll(84, 4));
console.log(findAll(36, 8));
