//@ts-check

/**
 * @param {string[]} names
 * @returns {string[]}
 */
function capMe(names) {
  return names.map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase());
} // capMe()

console.log(capMe(["jo", "nelson", "jurie"]));
console.log(capMe(["KARLY", "DANIEL", "KELSEY"]));
