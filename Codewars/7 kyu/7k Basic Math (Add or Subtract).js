//@ts-check

/**
 * @param {string} str
 * @returns {string}
 */
function calculate(str) {
  const ops = str.match(/plus|minus|\d+/g) ?? [];
  let ans = +(ops[0] ?? "0");
  for (let i = 1; i < ops.length; i += 2) {
    ans += ops[i] === "plus" ? +ops[i + 1] : -ops[i + 1];
  }
  return `${ans}`;
  return `${eval(str.replace(/plus/g, "+").replace(/minus/g, "-"))}`;
} // calculate()

console.log(calculate("1plus2plus3plus4"));
console.log(calculate("1plus2plus3minus4"));
