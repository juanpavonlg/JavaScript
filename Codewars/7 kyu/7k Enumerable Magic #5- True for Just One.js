//@ts-check

/**
 * @param {number[]} arr 
 * @param {() => boolean} fun 
 * @returns {boolean}
 */
function one(arr, fun) {
  return arr.filter(fun).length === 1;
} // one()

console.log(one([], () => true));
console.log(one([1], () => true));
console.log(
  one([1, 2, 3, 4, 5], function (item) {
    return item < 2;
  }),
);
console.log(
  one([1, 2, 3, 4, 5], function (item) {
    return item % 2 !== 0;
  }),
);
console.log(
  one([1, 2, 3, 4, 5], function (item) {
    return item > 5;
  }),
);
