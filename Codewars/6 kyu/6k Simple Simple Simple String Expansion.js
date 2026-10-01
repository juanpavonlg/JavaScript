//@ts-check

/**
 * @param {string} s
 * @returns {string}
 */
function stringExpansion(s) {
  return s.replace(/\d\D*/g, (e) =>
    e.slice(1).replace(/./g, (x) => x.repeat(+e[0])),
  );
} // stringExpansion()

console.log(stringExpansion("3D2a5d2f"));
console.log(stringExpansion("3abc"));
console.log(stringExpansion("3d332f2a"));
console.log(stringExpansion("abcde"));
console.log(stringExpansion("1111"));
console.log(stringExpansion(""));
console.log(stringExpansion("a2bcde"));
