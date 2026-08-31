//@ts-check

/**
 * @param {((a: any) => any)[]} functions 
 * @returns {<T>(input: T) => T}
 */
function chained(functions) {
  return function (input) {
    return functions.reduce((res, fn) => fn(res), input);
  };
} // chained()

/**
 * @param {number} x 
 * @returns {number}
 */
function f1(x) {
  return x * 2;
} // f1()

/**
 * @param {number} x 
 * @returns {number}
 */
function f2(x) {
  return x + 2;
} // f2()

/**
 * @param {number} x 
 * @returns {number}
 */
function f3(x) {
  return Math.pow(x, 2);
} // f3()

/**
 * @param {string} x 
 * @returns {string[]}
 */
function f4(x) {
  return x.split("").concat().reverse().join("").split(" ");
} // f4()

/**
 * @param {string[]} xs
 * @returns {string[]}
 */
function f5(xs) {
  return xs.concat().reverse();
} // f5()

/**
 * @param {string[]} xs
 * @returns {string}
 */
function f6(xs) {
  return xs.join("_");
} // f6()

console.log(chained([f1, f2, f3])(0));
console.log(chained([f1, f2, f3])(2));
console.log(chained([f3, f2, f1])(2));
console.log(chained([f4, f5, f6])("lorem ipsum"));
