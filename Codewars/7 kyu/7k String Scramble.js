//@ts-check

/**
 * @param {string} str 
 * @param {number[]} arr 
 * @returns {string}
 */
function scramble(str, arr) {
  /** @type {string[]} */
  const ans = [];
  arr.forEach((e, i) => {
    ans[e] = str[i];
  });
  return ans.join("");
} // scramble()

console.log(scramble("abcd", [0, 3, 1, 2]));
