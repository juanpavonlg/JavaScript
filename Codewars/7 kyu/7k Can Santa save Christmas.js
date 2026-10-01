//@ts-check

/**
 * @param {string[]} durations
 * @returns {boolean}
 */
function determineTime(durations) {
  return (
    durations
      .map((e) => e.split(":"))
      .reduce((a, [h, m, s]) => a + 3600 * +h + 60 * +m + +s, 0) <=
    24 * 3600
  );
} // determineTime()

console.log(determineTime(["00:30:00", "02:30:00", "00:15:00"]));
console.log(determineTime([]));
console.log(determineTime(["04:30:00", "02:00:00", "01:30:00", "16:00:00"]));
console.log(determineTime(["12:00:00", "12:00:00"]));
console.log(determineTime(["12:00:00", "12:00:01"]));
console.log(determineTime(["06:00:00", "12:00:00", "06:30:00"]));
