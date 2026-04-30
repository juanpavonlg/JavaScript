//@ts-check

/**
 * @param {string} s
 * @returns {string}
 */
function removeParentheses(s) {
  // let ans = "";
  // let pairs = 0;
  // [...s].forEach((ch) => {
  //   if (ch === "(") {
  //     pairs++;
  //   } else if (pairs === 0) {
  //     ans += ch;
  //   } else if (ch === ")") {
  //     pairs--;
  //   }
  // });
  // return ans;
  return /\([^()]*\)/.test(s)
    ? removeParentheses(s.replace(/\([^()]*\)/g, ""))
    : s;
} // removeParentheses()

console.log(removeParentheses("example(unwanted thing)example"));
console.log(removeParentheses("example (unwanted thing) example"));
console.log(removeParentheses("a (bc d)e"));
console.log(removeParentheses("a(b(c))"));
console.log(
  removeParentheses("hello example (words(more words) here) something"),
);
console.log(removeParentheses("(first group) (second group) (third group)"));
console.log(
  removeParentheses(
    "ZqoHn(xZXSitGAiOetxJTi( tjOsWd(niGBfKElk zmbhFxy rV)pACBGKzZr)PTumIn)( LJFJshvv)cqoeLDRnqFZOIIsR",
  ),
);
