//@ts-check

/**
 * @param {string|null} name 
 * @returns {string|null}
 */
function greet(name) {
  return name ? `hello ${name}!` : null;
} // greet()

console.log(greet("Niks"));
console.log(greet(""));
console.log(greet(null));
