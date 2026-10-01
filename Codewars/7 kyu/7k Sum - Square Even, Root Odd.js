//@ts-check

/**
 * @param {number[]} ns
 * @returns {number}
 */
const sumSquareEvenRootOdd = (ns) => {
  return +ns
    .reduce((a, e) => a + (e % 2 ? Math.sqrt(e) : e ** 2), 0)
    .toFixed(2);
}; // sumSquareEvenRootOdd()

console.log(sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0]));
console.log(sumSquareEvenRootOdd([1, 14, 9, 8, 17, 21]));
