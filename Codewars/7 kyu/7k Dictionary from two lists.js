//@ts-check

/**
 * @param {string[]} keys
 * @param {number[]} values
 * @returns {{[key: string]: number}}
 */
function createDict(keys, values) {
  return Object.fromEntries(keys.map((e, i) => [e, values[i] ?? null]));
  // return keys.reduce((a, e, i) => ((a[e] = values[i] ?? null), a), {});
} // createDict()

console.log(createDict(["a", "b", "c", "d"], [1, 2, 3]));
console.log(createDict(["a", "b", "c"], [1, 2, 3, 4]));
