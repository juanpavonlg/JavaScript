//@ts-check

/**
 * @param {number[]} stations
 * @returns {number}
 */
function riders(stations) {
  let r = 1;
  let dist = 0;
  for (const station of stations) {
    dist += station;
    if (dist > 100) {
      dist = station;
      r++;
    }
  }
  return r;
} // riders()

console.log(riders([18, 15]));
console.log(riders([43, 23, 40, 13]));
console.log(riders([33, 8, 16, 47, 30, 30, 46]));
console.log(riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49]));
console.log(riders([45, 7, 19, 28, 16, 14, 35, 44, 40, 17, 16, 18]));
