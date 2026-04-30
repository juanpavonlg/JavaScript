//@ts-check

/**
 * @param {string} city
 * @returns {string}
 */
function getStrings(city) {
  const freqs = {};
  [...city].forEach((ch) => {
    if (/[a-z]/i.test(ch)) {
      const letter = ch.toLowerCase();
      freqs[letter] = freqs[letter] ? freqs[letter] + "*" : "*";
    }
  });
  return Object.entries(freqs)
    .map(([k, v]) => `${k}:${v}`)
    .join();
} // getStrings()

console.log(getStrings("Chicago"));
console.log(getStrings("Bangkok"));
console.log(getStrings("Las Vegas"));
