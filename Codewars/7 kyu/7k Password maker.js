//@ts-check

/**
 * @param {string} phrase
 * @returns {string}
 */
function makePassword(phrase) {
  return phrase
    .split(" ")
    .map((e) => e[0])
    .join("")
    .replace(/i/gi, "1")
    .replace(/o/gi, "0")
    .replace(/s/gi, "5");
} // makePassword()

console.log(makePassword("Give me liberty or give me death"));
console.log(makePassword("Keep Calm and Carry On"));
