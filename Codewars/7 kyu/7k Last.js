//@ts-check

/**
 * @returns {number|string|(number|string)[]}
 */
function last() {
  const args = [...arguments];
  if (args.length === 1) {
    if (Array.isArray(args[0]) || typeof args[0] === "string") {
      return args[0].at(-1);
    }
    return args[0];
  }
  return args.at(-1);
} // last()

console.log(last(5));
console.log(last([1, 2, 3, 4]));
console.log(last("xyz"));
console.log(last(1, 2, 3, 4));
console.log(last([1, 2], [3, 4]));
console.log(
  last([
    [1, 2],
    [3, 4],
  ]),
);
