//@ts-check

/**
 * @param {[number, number, number]} triplet
 * @returns {number}
 */
function gimme(triplet) {
  return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
} // gimme()

console.log(gimme([2, 3, 1]));
console.log(gimme([5, 10, 14]));
