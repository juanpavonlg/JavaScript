//@ts-check

/**
 * @param {string} s
 * @returns {string}
 */
function hydrate(s) {
  const sum = (s.match(/\d+/g) ?? []).reduce((a, e) => a + +e, 0);
  return `${sum} glass${sum !== 1 ? "es" : ""} of water`;
} // hydrate()

console.log(hydrate("1 beer"));
console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"));
