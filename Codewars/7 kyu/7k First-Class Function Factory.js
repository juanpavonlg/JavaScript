//@ts-check

/**
 * @param {number} x
 * @returns {(a: number[]) => number[]} 
 */
function factory(x) {
  return function(a) {
    return a.map((e) => x * e);
  }
} // factory()

const fives = factory(5);
const myArray = [1, 2, 3];
console.log(fives(myArray));
