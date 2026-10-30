//@ts-check

/**
 * @param {any[]} value
 * @returns {boolean}
 */
const arrCheck = (value) => value.every(Array.isArray); // arrCheck()

console.log(arrCheck([[1], [2]]));
console.log(arrCheck(["1", "2"]));
console.log(arrCheck([{ 1: 1 }, { 2: 2 }]));
