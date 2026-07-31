//@ts-check

/**
 * @param {string[][]} x
 * @returns {string}
 */
function well(x) {
  const good = (("" + x).match(/good/gi) ?? []).length;
  return good === 0 ? "Fail!" : good < 3 ? "Publish!" : "I smell a series!";
} // well()

console.log(
  well([
    ["bad", "bAd", "bad"],
    ["bad", "bAd", "bad"],
    ["bad", "bAd", "bad"],
  ]),
);
console.log(
  well([
    ["gOOd", "bad", "BAD", "bad", "bad"],
    ["bad", "bAd", "bad"],
    ["GOOD", "bad", "bad", "bAd"],
  ]),
);
console.log(
  well([
    ["gOOd", "bAd", "BAD", "bad", "bad", "GOOD"],
    ["bad"],
    ["gOOd", "BAD"],
  ]),
);
