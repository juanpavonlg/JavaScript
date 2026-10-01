//@ts-check

/**
 * @param {string} s
 * @returns {string | null}
 */
function firstNonRepeated(s) {
  return [...s].find((e) => s.indexOf(e) === s.lastIndexOf(e)) ?? null;
} // firstNonRepeated()

console.log(firstNonRepeated("test"));
console.log(firstNonRepeated("teeter"));
console.log(firstNonRepeated("trend"));
console.log(firstNonRepeated("aabbcc"));
