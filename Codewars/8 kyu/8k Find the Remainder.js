//@ts-check

/**
 * @param {number} n 
 * @param {number} m 
 * @returns {number}
 */
function remainder(n, m) {
  return n > m ? n % m : m % n;
} // remainder()

console.log(remainder(17, 5));
console.log(remainder(13, 72));
console.log(remainder(0, -1));
console.log(remainder(0, 1));
