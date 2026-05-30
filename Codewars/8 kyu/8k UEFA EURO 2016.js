//@ts-check

/**
 *
 * @param {[string, string]} teams
 * @param {[number, number]} scores
 * @returns {string}
 */
function uefaEuro2016(teams, scores) {
  return `At match ${teams[0]} - ${teams[1]}, ${scores[0] === scores[1] ? "teams played draw." : `${scores[0] > scores[1] ? teams[0] : teams[1]} won!`}`;
} // uefaEuro2016()

console.log(uefaEuro2016(["Germany", "Ukraine"], [2, 0]));
console.log(uefaEuro2016(["Belgium", "Italy"], [0, 2]));
console.log(uefaEuro2016(["Portugal", "Iceland"], [1, 1]));
