//@ts-check

/**
 * @param {string} string
 * @returns {string}
 */
function remove(string) {
  return string.replace(/!/g, "") + string.replace(/[^!]/g, "");
} // remove()

console.log(remove("Hi!"));
console.log(remove("Hi! Hi!"));
console.log(remove("Hi! Hi! Hi!"));
console.log(remove("Hi! !Hi Hi!"));
console.log(remove("Hi! Hi!! Hi!"));
