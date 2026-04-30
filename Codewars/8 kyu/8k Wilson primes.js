//@ts-check

/**
 * @param {number} p 
 * @returns {boolean}
 */
function amIWilson(p) {
  return [5, 13, 563].includes(p);
} // amIWilson()

console.log(amIWilson(5));
console.log(amIWilson(6));
console.log(amIWilson(9));
console.log(amIWilson(702));
