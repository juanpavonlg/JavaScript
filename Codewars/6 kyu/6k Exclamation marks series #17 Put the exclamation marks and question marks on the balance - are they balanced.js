//@ts-check

/**
 * @param {string} left
 * @param {string} right
 * @returns {string}
 */
function balance(left, right) {
  /**
   * @param {string} str
   * @returns {number}
   */
  const weight = (str) => {
    const weights = { "!": 2, "?": 3 };
    return [...str].reduce((a, e) => a + weights[e], 0);
  }; // weight()

  const [l, r] = [weight(left), weight(right)];
  return l === r ? "Balance" : l > r ? "Left" : "Right";
} // balance()

console.log(balance("!!", "??"));
console.log(balance("!??", "?!!"));
console.log(balance("!?!!", "?!?"));
console.log(balance("!!???!????", "??!!?!!!!!!!"));
