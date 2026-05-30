//@ts-check

/**
 * @param {number} sum
 * @param {number} difference
 * @returns {[number, number]|null}
 */
function getAges(sum, difference) {
  if (sum < 0 || difference < 0 || sum < difference) {
    return null;
  }
  const x = (sum + difference) / 2;
  const y = sum - x;
  return [x, y];
} // getAges()

console.log(getAges(24, 4));
console.log(getAges(63, -14));
