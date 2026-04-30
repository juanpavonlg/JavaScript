//@ts-check

/**
 * @param {string} str
 * @returns {string}
 */
function kebabize(str) {
  return str
    .replace(/\d/g, "")
    .replace(/^[A-Z]/, (e) => e.toLowerCase())
    .replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
} // kebabize()

console.log(kebabize("camelsHaveThreeHumps"));
console.log(kebabize("camelsHave3Humps"));
console.log(kebabize("CAMEL"));
