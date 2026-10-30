//@ts-check

/**
 * @param {number[]} arr
 * @returns {number}
 */
function total(arr) {
  return arr.filter((_, i) => isPrime(i)).reduce((a, e) => a + e, 0);
} // total()

/**
 * @param {number} n
 * @returns {boolean}
 */
function isPrime(n) {
  for (let d = 2; d * d <= n; d += (d % 2) + 1) {
    if (n % d === 0) {
      return false;
    }
  }
  return n > 1;
} // isPrime()

console.log(total([]));
console.log(total([1, 2, 3, 4]));
console.log(total([1, 2, 3, 4, 5, 6]));
console.log(total([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
