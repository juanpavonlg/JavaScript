//@ts-check

/**
 * @param {number} numPill
 * @param {number} dist
 * @param {number} width
 * @returns {number}
 */
function pillars(numPill, dist, width) {
  return numPill > 1 ? 100 * (numPill - 1) * dist + (numPill - 2) * width : 0;
} // pillars()

console.log(pillars(1, 10, 10));
console.log(pillars(2, 20, 25));
console.log(pillars(11, 15, 30));
