//@ts-check

/**
 * @param {string} name
 * @returns {string}
 */
function initializeNames(name) {
  return name.replace(/ (\w)\w*(?= )/g, " $1.");
} // initializeNames()

console.log(initializeNames("Jack Ryan"));
console.log(initializeNames("Lois Mary Lane"));
console.log(initializeNames("Dimitri"));
console.log(initializeNames("Alice Betty Catherine Davis"));
