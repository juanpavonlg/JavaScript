//@ts-check

/**
 * @param {number} n
 * @returns {number | null}
 */
const prevMultOfThree = (n) => {
  while (n % 3) {
    n = (n / 10) | 0;
  }
  return n ? n : null;
}; // prevMultOfThree()

console.log(prevMultOfThree(1));
console.log(prevMultOfThree(25));
console.log(prevMultOfThree(36));
console.log(prevMultOfThree(1244));
console.log(prevMultOfThree(952406));
