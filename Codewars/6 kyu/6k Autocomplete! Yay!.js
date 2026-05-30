//@ts-check

/**
 * @param {string} input
 * @param {string[]} dictionary
 * @returns {string[]}
 */
function autocomplete(input, dictionary) {
  input = input.replace(/[^a-z]/gi, "");
  return dictionary.filter((e) => RegExp(`^${input}`, "i").test(e)).slice(0, 5);
} // autocomplete()

console.log(autocomplete("ai", ["airplane", "airport", "apple", "ball"]));
