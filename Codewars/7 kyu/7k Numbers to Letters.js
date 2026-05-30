//@ts-check

/**
 * @param {string[]} x 
 * @returns {string}
 */
function switcher(x) {
  const alphabet = "-zyxwvutsrqponmlkjihgfedcba!? ";
  return x.map((e) => alphabet[+e]).join("");
} // switcher()

console.log(switcher(["24", "12", "23", "22", "4", "26", "9", "8"]));
console.log(
  switcher([
    "25",
    "7",
    "8",
    "4",
    "14",
    "23",
    "8",
    "25",
    "23",
    "29",
    "16",
    "16",
    "4",
  ]),
);
console.log(switcher(["4", "24"]));
