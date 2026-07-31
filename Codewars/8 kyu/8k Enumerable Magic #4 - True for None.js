//@ts-check

/**
 * @param {number[]} arr
 * @param {(n: number) => boolean} fun
 * @returns {boolean}
 */
function none(arr, fun) {
  return !arr.some(fun);
} // none()

console.log(
  none([1, 2, 3, 4, 5], function (item) {
    return item > 5;
  }),
);
console.log(
  none([1, 2, 3, 4, 5], function (item) {
    return item > 4;
  }),
);
