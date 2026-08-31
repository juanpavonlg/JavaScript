//@ts-check

/**
 * @param {string[]} names
 * @returns {string[]}
 */
function sortme(names) {
  return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
} // sortme()

console.log(sortme(["Hello", "there", "I'm", "fine"]));
console.log(sortme(["C", "d", "a", "B"]));
console.log(
  sortme([
    "big",
    "call",
    "Do",
    "fact",
    "few",
    "Find",
    "Find",
    "Find",
    "he",
    "high",
    "Leave",
    "Look",
    "new",
    "New",
    "over",
    "over",
    "Person",
    "Same",
    "Thing",
    "Up",
  ]),
);
