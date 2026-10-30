//@ts-check

/**
 * @param {string[]} x
 * @returns {string}
 */
function paul(x) {
  /** @type {{[key: string]: number}} */
  const points = { kata: 5, "Petes kata": 10, life: 0, eating: 1 };
  const score = x.reduce((a, e) => a + points[e], 0);
  switch (true) {
    case score < 40:
      return "Super happy!";
    case score < 70:
      return "Happy!";
    case score < 100:
      return "Sad!";
    default:
      return "Miserable!";
  }
} // paul()

console.log(paul(["life", "eating", "life"]));
console.log(paul(["life", "Petes kata", "Petes kata", "Petes kata", "eating"]));
console.log(
  paul([
    "Petes kata",
    "Petes kata",
    "eating",
    "Petes kata",
    "Petes kata",
    "eating",
  ]),
);
