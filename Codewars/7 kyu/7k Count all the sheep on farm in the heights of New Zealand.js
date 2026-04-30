//@ts-check

/**
 * @param {number[]} friday
 * @param {number[]} saturday
 * @param {number} total
 * @returns {number}
 */
function lostSheep(friday, saturday, total) {
  return [...friday, ...saturday].reduce((a, e) => a - e, total);
} // lostSheep()

console.log(lostSheep([1, 2], [3, 4], 15));
console.log(lostSheep([3, 1, 2], [4, 5], 21));
console.log(lostSheep([0], [4, 15], 31));
console.log(lostSheep([], [4], 15));
console.log(lostSheep([], [], 15));
