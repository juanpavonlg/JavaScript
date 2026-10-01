//@ts-check

/**
 * @param {number} n
 * @returns {string}
 */
function womensAge(n) {
  return `${n}? That's just ${20 + (n % 2)}, in base ${(n / 2) | 0}!`;
} // womensAge()

console.log(womensAge(32));
console.log(womensAge(39));
