//@ts-check

/**
 * @param {string} s 
 * @returns {string}
 */
function ensureQuestion(s) {
  return s.endsWith("?") ? s : `${s}?`;
} // ensureQuestion()

console.log(ensureQuestion("Yes"));
console.log(ensureQuestion("No?"));
