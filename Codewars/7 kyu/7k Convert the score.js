//@ts-check

/**
 * @param {string} string
 * @returns {[number, number]}
 */
function scoreboard(string) {
  const numbers = [
    "nil",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const words = string.split(" ").reverse();
  return [numbers.indexOf(words[1]), numbers.indexOf(words[0])];
} // scoreboard()

console.log(scoreboard("new score: two three"));
console.log(scoreboard("two two"));
console.log(scoreboard("Arsenal just conceded another goal, two nil"));
