//@ts-check

/**
 * @param {string} poly
 * @returns {string}
 */
function simplify(poly) {
  /** @type {{[key: string]: number}} */
  const monos = {};
  const exps = poly.match(/[+-]?\d*[a-z]+/g) ?? [];
  for (const exp of exps) {
    const num = (exp.match(/^[+-]?\d*/g) ?? [""])[0];
    const coef = num === "" || num === "+" ? 1 : num === "-" ? -1 : +num;
    const vars = [...(exp.match(/[a-z]+/g) ?? [""])[0]].sort().join("");
    monos[vars] = (monos[vars] || 0) + coef;
  }
  const nonzero = Object.entries(monos)
    .filter((e) => e[1] !== 0)
    .sort((a, b) => a[0].length - b[0].length || a[0].localeCompare(b[0]));
  const ans = nonzero.map(
    ([v, c], i) =>
      `${c < 0 ? "-" : i > 0 ? "+" : ""}${Math.abs(c) === 1 ? "" : Math.abs(c)}${v}`,
  );
  return ans.join("");
} // simplify()

console.log(simplify("cb+cba"));
console.log(simplify("2xy-yx"));
console.log(simplify("-a+5ab+3a-c-2a"));
console.log(simplify("-abc+3a+2ac"));
console.log(simplify("xyz-xz"));
console.log(simplify("a+ca-ab"));
console.log(simplify("xzy+zby"));
console.log(simplify("-y+x"));
console.log(simplify("y-x"));
