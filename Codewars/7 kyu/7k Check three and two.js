//@ts-check

/**
 * @param {string[]} array
 * @returns {boolean}
 */
function checkThreeAndTwo(array) {
  const freqs = {};
  array.forEach((letter) => {
    freqs[letter] = ++freqs[letter] || 1;
  });
  return Object.values(freqs).reduce((a, e) => a * e) === 6;
} // checkThreeAndTwo()

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]));
console.log(checkThreeAndTwo(["a", "b", "c", "b", "c"]));
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"]));
