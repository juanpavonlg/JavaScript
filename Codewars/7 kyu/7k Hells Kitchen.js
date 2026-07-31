//@ts-check

/**
 * @param {string} a
 * @returns {string}
 */
function gordon(a) {
  return a
    .toUpperCase()
    .replace(/\w+/g, "$&!!!!")
    .replace(/[AEIOU]/g, (e) => e === "A" ? "@" : "*");
} // gordon()

console.log(gordon("What feck damn cake"));
console.log(gordon("are you stu pid"));
console.log(gordon("i am a chef"));
