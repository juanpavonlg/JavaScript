//@ts-check

/**
 * @param {string} string 
 * @returns {string}
 */
function remove(string) {
  return string.replace(/(\w)(!+)/g, "$1");
  // return string.replace(/\b!+/g, "");
} // remove()

console.log(remove("Hi!"));
console.log(remove("Hi!!!"));
console.log(remove("!Hi"));
console.log(remove("!Hi!"));
console.log(remove("Hi! Hi!"));
console.log(remove("!!!Hi !!hi!!! !hi"));
