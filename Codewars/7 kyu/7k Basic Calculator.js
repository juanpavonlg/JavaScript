function calculate(num1, operation, num2) {
  const ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b ? a / b : null),
  };
  return (ops[operation] ?? (() => null))(num1, num2);
} // calculate()

console.log(calculate(2, "+", 4));
console.log(calculate(6, "-", 1.5));
console.log(calculate(-4, "*", 8));
console.log(calculate(49, "/", -7));
console.log(calculate(8, "m", 2));
console.log(calculate(4, "/", 0));
