function thinkingAndTesting(number, base) {
  return number - base ** Math.floor(Math.log(number) / Math.log(base));
} // thinkingAndTesting()

console.log(thinkingAndTesting(2, 2));
console.log(thinkingAndTesting(100, 2));
