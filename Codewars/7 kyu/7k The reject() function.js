//@ts-check

/**
 * @param {any[]} array 
 * @param {(x: any) => boolean} predicate 
 * @returns {(number | string)[]}
 */
function reject(array, predicate) {
  return array.filter((e) => !predicate(e));
} // reject()

console.log(reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0));
