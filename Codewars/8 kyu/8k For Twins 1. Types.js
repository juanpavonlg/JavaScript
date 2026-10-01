//@ts-check

/**
 * @param {any} variable
 * @param {string} type
 * @returns {boolean}
 */
function typeValidation(variable, type) {
  return typeof variable === type;
} // typeValidation()

console.log(typeValidation(42, "number"));
console.log(typeValidation("42", "number"));
