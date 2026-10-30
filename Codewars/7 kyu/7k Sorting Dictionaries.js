//@ts-check

/**
 * @param {{[key: string]: number}} dict
 * @returns {(string | number)[][]}
 */
function sortDict(dict) {
  return Object.entries(dict)
    .map(([k, v]) => [+k || k, v])
    .sort((a, b) => +b[1] - +a[1]);
} // sortDict()

console.log(sortDict({ 3: 1, 2: 2, 1: 3 }));
console.log(sortDict({ 1: 2, 2: 4, 3: 6 }));
