//@ts-check

/**
 * @param {number[]} numbers
 * @returns {number}
 */
function minimumNumber(numbers) {
  let num = 0;
  const sum = numbers.reduce((a, e) => a + e);
  while (!isPrime(sum + num)) {
    num++;
  }
  return num;
} // minimumNumber()

/**
 * @param {number} n
 * @returns {boolean}
 */
function isPrime(n) {
  for (let d = 2; d * d <= n; d += d % 2 + 1) {
    if (n % d === 0) {
      return false;
    }
  }
  return n > 1;
} // isPrime()

console.log(minimumNumber([3, 1, 2]));
console.log(minimumNumber([2, 12, 8, 4, 6]));
console.log(minimumNumber([50, 39, 49, 6, 17, 28]));
