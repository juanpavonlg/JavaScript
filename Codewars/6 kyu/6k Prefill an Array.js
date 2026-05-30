//@ts-check

/**
 * @param {*} n
 * @param {*} v
 * @returns {*[]}
 */
function prefill(n, v) {
  if (parseInt(n) !== Math.abs(n)) {
    throw TypeError(`${n} is invalid`);
  }
  return new Array(+n).fill(v);
} // prefill()

console.log(prefill(3, 1));
console.log(prefill(2, "abc"));
console.log(prefill("1", 1));
console.log(prefill(3, prefill(2, "2d")));
console.log(prefill("xyz", 1));
