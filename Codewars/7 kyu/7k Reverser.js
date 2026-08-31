//@ts-check

/**
 * @param {number} n 
 * @returns {number}
 */
function reverse(n) {
  let rev = 0;
  while (n) {
    rev = 10 * rev + n % 10;
    n = n / 10 | 0;
  }
  return rev;
} // reverse()

console.log(reverse(1234));
console.log(reverse(10987));
console.log(reverse(1020));
