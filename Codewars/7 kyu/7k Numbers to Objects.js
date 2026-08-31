//@ts-check

/**
 * @param {number[]} s
 * @returns {{[key: string]: string}[]}
 */
function numObj(s) {
  return s.map((e) => ({ [e]: String.fromCharCode(e) }));
} // numObj()

console.log(numObj([118, 117, 120]));
console.log(numObj([101, 121, 110, 113, 113, 103]));
