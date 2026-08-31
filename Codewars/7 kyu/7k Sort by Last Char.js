//@ts-check

/**
 * @param {string} x
 * @returns {string[]}
 */
function last(x) {
  return x
    .split(" ")
    .sort((a, b) => (a.at(-1) ?? "").localeCompare(b.at(-1) ?? ""));
} // last()

console.log(last("man i need a taxi up to ubud"));
console.log(last("what time are we climbing up the volcano"));
console.log(last("take me to semynak"));
