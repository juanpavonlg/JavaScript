//@ts-check

/**
 * @param {string} s 
 * @returns {string}
 */
function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
} // removeExclamationMarks()

console.log(removeExclamationMarks("Hello World!"));
