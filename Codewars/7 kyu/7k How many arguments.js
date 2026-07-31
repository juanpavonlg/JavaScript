//@ts-check

/**
 * @returns {number}
 */
function args_count() {
  return arguments.length;
} // args_count()

console.log(args_count());
console.log(args_count("a"));
console.log(args_count("a", "b"));
