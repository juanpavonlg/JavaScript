//@ts-check

/**
 * @returns {boolean}
 */
function isDivisible() {
  return [...arguments].every((e, _, a) => a[0] % e === 0);
} // isDivisible()

console.log(isDivisible(6, 1, 3));
console.log(isDivisible(12, 2));
console.log(isDivisible(100, 5, 4, 10, 25, 20));
console.log(isDivisible(12, 7));
