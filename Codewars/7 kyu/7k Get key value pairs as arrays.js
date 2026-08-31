//@ts-check

/**
 * @param {{[key: string]: number}} data 
 * @returns {[string[], number[]]}
 */
function keysAndValues(data) {
  return [Object.keys(data), Object.values(data)];
} // keysAndValues()

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
