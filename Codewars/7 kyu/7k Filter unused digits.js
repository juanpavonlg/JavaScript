//@ts-check

/**
 * @returns {string}
 */
function unusedDigits() {
  return "0123456789".replace(
    new RegExp(`[${[...arguments].join("")}]`, "g"),
    "",
  );
} // unusedDigits()

console.log(unusedDigits(12, 34, 56, 78));
console.log(unusedDigits(2015, 8, 26));
