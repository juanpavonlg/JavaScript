//@ts-check

/**
 * @param {string} fullText
 * @param {string} search
 * @returns {number}
 */
function solution(fullText, search) {
  return (fullText.match(RegExp(search, "g")) ?? []).length;
} // solution()

console.log(solution("aa_bb_cc_dd_bb_e", "bb"));
console.log(solution("aaabbbcccc", "bbb"));
