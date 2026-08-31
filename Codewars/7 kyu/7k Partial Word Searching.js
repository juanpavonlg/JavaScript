//@ts-check

/**
 * @param {string} query
 * @param {string[]} seq
 * @returns {string[]}
 */
function wordSearch(query, seq) {
  const ans = seq.filter((e) => RegExp(query, "i").test(e));
  return ans.length ? ans : ["Empty"];
} // wordSearch()

console.log(wordSearch("me", ["home", "milk", "Mercury", "fish"]));
