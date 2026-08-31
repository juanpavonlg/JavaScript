//@ts-check

/**
 *
 * @param {[string, number][]} ticket
 * @param {number} win
 * @returns {string}
 */
function bingo(ticket, win) {
  return ticket.reduce(
    (a, e) => a + +[...e[0]].some((x) => x.charCodeAt(0) === e[1]),
    0,
  ) < win
    ? "Loser!"
    : "Winner!";
} // bingo()

console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    2,
  ),
);
