//@ts-check

/**
 * @param {string} equation
 * @returns {string}
 */
function dotCalculator(equation) {
  const ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "//": (a, b) => a / b,
  };
  const [a, op, b] = equation.split(" ");
  return ".".repeat(ops[op](a.length, b.length));
} // dotCalculator()

console.log(dotCalculator("..... + ..............."));
console.log(dotCalculator("..... - ..."));
console.log(dotCalculator("..... - ."));
console.log(dotCalculator("..... * ..."));
console.log(dotCalculator("..... * .."));
console.log(dotCalculator("..... // .."));
console.log(dotCalculator("..... // ."));
console.log(dotCalculator(". // .."));
console.log(dotCalculator(".. - .."));
