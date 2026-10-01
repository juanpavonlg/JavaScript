//@ts-check

/**
 * @param {number} catYears
 * @param {number} dogYears
 * @returns {[number, number]}
 */
var ownedCatAndDog = function (catYears, dogYears) {
  const cat = catYears < 24 ? catYears / 15 : 2 + (catYears - 24) / 4;
  const dog = dogYears < 24 ? dogYears / 15 : 2 + (dogYears - 24) / 5;
  return [cat | 0, dog | 0];
}; // ownedCatAndDog()

console.log(ownedCatAndDog(15, 15));
console.log(ownedCatAndDog(24, 24));
console.log(ownedCatAndDog(56, 64));
