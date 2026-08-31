//@ts-check

/**
 * @param {(...args: any[]) => any} func 
 * @param {any[]} args 
 * @returns {any}
 */
function spread(func, args) {
  return func(...args);
} // spread()

console.log(
  spread(
    function (x, y) {
      return x + y;
    },
    [1, 2],
  ),
);
