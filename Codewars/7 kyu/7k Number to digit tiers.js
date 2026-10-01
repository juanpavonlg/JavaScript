//@ts-check

/**
 * @param {number} num
 * @returns {string[]}
 */
function createArrayOfTiers(num) {
  let a = "";
  return [...`${num}`].map((e) => a += e);
} // createArrayOfTiers()

console.log(createArrayOfTiers(420));
console.log(createArrayOfTiers(2017));
console.log(createArrayOfTiers(2010));
console.log(createArrayOfTiers(4020));
console.log(createArrayOfTiers(80200));
