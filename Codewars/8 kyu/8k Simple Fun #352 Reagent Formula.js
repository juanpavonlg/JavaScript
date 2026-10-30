//@ts-check

/**
 * @param {number[]} formula
 * @returns {boolean}
 */
function isValid(formula) {
  return (
    !(formula.includes(1) && formula.includes(2)) &&
    !(formula.includes(3) && formula.includes(4)) &&
    formula.includes(5) === formula.includes(6) &&
    (formula.includes(7) || formula.includes(8))
  );
} // isValid()

console.log(isValid([1, 3, 7]));
console.log(isValid([7, 1, 2, 3]));
console.log(isValid([1, 3, 5, 7]));
console.log(isValid([1, 5, 6, 7, 3]));
console.log(isValid([5, 6, 7]));
console.log(isValid([5, 6, 7, 8]));
console.log(isValid([6, 7, 8]));
console.log(isValid([7, 8]));
