//@ts-check

/**
 * @param {number} input
 * @param {function[]} fs
 * @returns {number}
 */
function chain(input, fs) {
  return fs.reduce((a, e) => e(a), input);
} // chain()

/**
 * @param {number} num
 * @returns {number}
 */
function add(num) {
  return num + 1;
} // add()

/**
 * @param {number} num
 * @returns {number}
 */
function mult(num) {
  return num * 30;
} // mult()

console.log(chain(2, [add, mult]));
