//@ts-check

/**
 * @param {string} string
 * @returns {string}
 */
function remove(string) {
  const ans = [];
  const words = string.split(" ");
  for (const w of words) {
    if ((w.match(/!/g) ?? []).length !== 1) {
      ans.push(w);
    }
  }
  return ans.join(" ");
} // remove()

console.log(remove("Hi!"));
console.log(remove("Hi! Hi!"));
console.log(remove("Hi! Hi! Hi!"));
console.log(remove("Hi Hi! Hi!"));
console.log(remove("Hi! !Hi Hi!"));
console.log(remove("Hi! Hi!! Hi!"));
console.log(remove("Hi! !Hi! Hi!"));
