//@ts-check

/**
 * @param {string} equation
 * @param {number} point
 * @returns {number}
 */
function differentiate(equation, point) {
  return (equation.match(/[+-]?[^+-]+/g) ?? [])
    .map((e) => e.split("x"))
    .map(([c, e]) => [
      +c || (/-/.test(c) ? -1 : 1),
      /\^/.test(e) ? +e.slice(1) : e === "" ? 1 : 0,
    ])
    .reduce((a, [c, e]) => a + (e ? e * c * point ** (e - 1) : 0), 0);
} // differentiate()

console.log(differentiate("12x+2", 3));
console.log(differentiate("x^2+3x+2", 3));
console.log(differentiate("-5x^2+10x+4", 3));
