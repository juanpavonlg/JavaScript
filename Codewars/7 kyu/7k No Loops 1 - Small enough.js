//@ts-check

/**
 * @param {number[]} a 
 * @param {number} limit 
 * @returns {boolean}
 */
function smallEnough(a, limit) {
  return a.every((e) => e <= limit);
} // smallEnough()

console.log(smallEnough([66, 101], 200));
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120));
