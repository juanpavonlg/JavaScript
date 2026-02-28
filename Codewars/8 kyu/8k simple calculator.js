function calculator(a, b, sign) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "unknown value";
  }
  const operation = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };
  return (operation[sign] ?? (() => "unknown value"))(a, b);
} // calculator()

console.log(calculator(1, 2, "+"));
console.log(calculator(1, 2, "&"));
console.log(calculator(1, "k", "*"));
