function problem(x) {
  return typeof x === "string" ? "Error" : 50 * x + 6;
} // problem()

console.log(problem("hello"));
console.log(problem(1));
