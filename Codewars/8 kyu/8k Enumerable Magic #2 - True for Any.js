//@ts-check

/**
 * @param {number[]} arr 
 * @param {(v: number, i: number) => boolean} fun
 * @returns {boolean}
 */
function any(arr, fun) {
  return arr.some(fun);
} // any()

console.log(
  any([1, 2, 3, 4], function (v, i) {
    return v > 3;
  }),
);
console.log(
  any([1, 2, 3, 4], function (v, i) {
    return v > 4;
  }),
);
console.log(
  any([], function (v, i) {
    return v > 4;
  }),
);
