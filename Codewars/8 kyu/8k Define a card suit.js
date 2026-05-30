//@ts-check

/**
 * @param {string} card
 * @returns {string}
 */
function defineSuit(card) {
  const suits = { "♣": "clubs", "♦": "diamonds", "♥": "hearts", "♠": "spades" };
  return suits[card.at(-1) ?? ""] ?? "";
} // defineSuit()

console.log(defineSuit("3♣"));
console.log(defineSuit("3♦"));
console.log(defineSuit("3♥"));
console.log(defineSuit("3♠"));
