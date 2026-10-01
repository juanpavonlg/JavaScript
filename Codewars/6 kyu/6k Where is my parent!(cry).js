//@ts-check

/**
 * @param {string} dancingBrigade
 * @returns {string}
 */
function findChildren(dancingBrigade) {
  return [...dancingBrigade]
    .sort((a, b) => a.localeCompare(b, "en", { caseFirst: "upper" }))
    .join("");
} // findChildren()

console.log(findChildren("aAbaBb"));
