//@ts-check

/**
 * @param {string} n
 * @returns {string}
 */
function initials(n) {
  return n
    .split(" ")
    .map(
      (e, i, a) => e[0].toUpperCase() + (i === a.length - 1 ? e.slice(1) : "."),
    )
    .join("");
} // initials()

console.log(initials("code wars"));
console.log(initials("Barack hussein obama"));
