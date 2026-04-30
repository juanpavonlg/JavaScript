//@ts-check

/**
 * @param {number[]} numbers
 * @returns {number}
 */
function evenLast(numbers) {
  return (
    (numbers.at(-1) ?? 0) * numbers.reduce((a, e, i) => a + (i % 2 ? 0 : e), 0)
  );
} // evenLast()

console.log(evenLast([2, 3, 4, 5]));
