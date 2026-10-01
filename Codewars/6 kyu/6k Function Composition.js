//@ts-check

/**
 * @param {Function} f 
 * @param {Function} g
 * @returns {Function} 
 */
function compose(f, g) {
  return function() {
    return f(g(...arguments));
  }
} // compose()

/**
 * @param {number} a 
 * @returns {number}
 */
const add1 = function (a) {
  return a + 1;
};

/**
 * @param {any} a 
 * @returns {any}
 */
const id = function (a) {
  return a;
};

console.log(compose(add1, id)(0));

/**
 * @param {any} a 
 * @param {any} b 
 * @param {any} c 
 * @returns {any}
 */
const addAll3 = function (a, b, c) {
  return a + b + c;
};

console.log(compose(add1, addAll3)(1, 2, 3));
