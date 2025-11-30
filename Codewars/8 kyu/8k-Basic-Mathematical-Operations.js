function basicOp(operation, value1, value2) {
  const operator = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  }
  return operator[operation];
} // basicOp()

console.log(basicOp('+', 4, 7));
