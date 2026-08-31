//@ts-check

/**
 * @param {number | string} a 
 * @param {number | string} b 
 * @returns {boolean}
 */
function add(a, b) {
  return a == b;
} // add()

console.log(add("1", 1));
console.log(add(1, "1"));
console.log(add(1, "0"));
console.log(add("11", 11));
console.log(add(12, 12));
console.log(add(120, "021"));
