//@ts-check

/**
 * @param {any} arr 
 * @returns {boolean}
 */
function isIntArray(arr) {
  return Array.isArray(arr) && arr.every((e) => Number.isInteger(e));
} // isIntArray()

console.log(isIntArray([]));
console.log(isIntArray([1, 2, 3, 4]));
console.log(isIntArray([-11, -12, -13, -14]));
console.log(isIntArray([1.0, 2.0, 3.0]));
console.log(isIntArray([1, 2, NaN]));
console.log(isIntArray(true));
console.log(isIntArray(null));
console.log(isIntArray(undefined));
console.log(isIntArray(NaN));
console.log(isIntArray(""));
console.log(isIntArray([null]));
console.log(isIntArray([undefined]));
console.log(isIntArray([NaN]));
console.log(isIntArray([1.0, 2.0, 3.0001]));
console.log(isIntArray(["-1"]));
console.log(isIntArray([1.23e-7, 2]));
console.log(isIntArray([1.2, 1.8, 3]));
