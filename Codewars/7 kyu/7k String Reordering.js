//@ts-check

/**
 * @param {{[key :string]: string}[]} arrayOfObjects
 * @returns {string}
 */
function sentence(arrayOfObjects) {
  return arrayOfObjects
    .sort((a, b) => +Object.keys(a) - +Object.keys(b))
    .map((e) => Object.values(e))
    .join(" ");
} // sentence()

console.log(
  sentence([
    { 4: "dog" },
    { 2: "took" },
    { 3: "his" },
    { "-2": "Vatsan" },
    { 5: "for" },
    { 6: "a" },
    { 12: "spin" },
  ]),
);
