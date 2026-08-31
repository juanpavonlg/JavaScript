//@ts-check

/**
 * @param {number} n 
 * @returns {string}
 */
function pofi(n) {
  return ["1", "i", "-1", "-i"][n % 4];
} // pofi()

console.log(pofi(0));
console.log(pofi(1));
console.log(pofi(2));
console.log(pofi(3));
console.log(pofi(4));
console.log(pofi(5));
console.log(pofi(6));
console.log(pofi(7));
console.log(pofi(8));
console.log(pofi(9));
console.log(pofi(10));
