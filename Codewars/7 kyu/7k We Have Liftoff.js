//@ts-check

/**
 * @param {number[]} instructions
 * @returns {string}
 */
function liftoff(instructions) {
  return `${instructions.sort((a, b) => b - a).join(" ")} liftoff!`;
} // liftoff()

console.log(liftoff([8, 1, 10, 2, 7, 9, 6, 3, 4, 5]));
console.log(liftoff([1, 2, 4, 3, 5]));
