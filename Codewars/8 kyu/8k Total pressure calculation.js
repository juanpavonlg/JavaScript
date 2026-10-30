//@ts-check

/**
 * @param {number} molarMass1
 * @param {number} molarMass2
 * @param {number} givenMass1
 * @param {number} givenMass2
 * @param {number} volume
 * @param {number} temp
 * @returns {number}
 */
const solution = (
  molarMass1,
  molarMass2,
  givenMass1,
  givenMass2,
  volume,
  temp,
) => {
  return (
    ((givenMass1 / molarMass1 + givenMass2 / molarMass2) *
      0.082 *
      (temp + 273.15)) /
    volume
  );
}; // solution()

console.log(solution(44, 30, 3, 2, 5, 50));
console.log(solution(60, 20, 10, 30, 10, 100));
