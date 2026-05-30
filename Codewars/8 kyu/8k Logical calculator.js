//@ts-check

/**
 * @param {boolean[]} array
 * @param {string} op
 * @returns {boolean}
 */
function logicalCalc(array, op) {
  const ops = {
    AND: (a, b) => a && b,
    OR: (a, b) => a || b,
    XOR: (a, b) => a !== b,
  };
  return array.reduce(ops[op]);
} // logicalCalc()

console.log(logicalCalc([true, true, false], "AND"));
console.log(logicalCalc([true, true, false], "OR"));
console.log(logicalCalc([true, true, false], "XOR"));
