//@ts-check

/**
 * @param {number} start 
 * @param {number} end 
 * @returns {number[]}
 */
var paintLetterboxes = function (start, end) {
  const freq = Array(10).fill(0);
  for (let n = start; n <= end; n++) {
    for (const digit of `${n}`) {
      freq[+digit]++;
    }
  }
  return freq;
}; // paintLetterboxes()

console.log(paintLetterboxes(125, 132));
