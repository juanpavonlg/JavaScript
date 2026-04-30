//@ts-check

/**
 * @param {string} str
 * @returns {string}
 */
function reverse(str) {
  return str
    .trim()
    .replace(/ +/g, " ")
    .split(" ")
    .map((e, i) => (i % 2 ? [...e].reverse().join("") : e))
    .join(" ");
} // reverse()

console.log(reverse("Reverse this string, please!"));
console.log(reverse("I really don't like reversing strings!"));
